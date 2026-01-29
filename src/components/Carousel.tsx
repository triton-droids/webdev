import { useCallback, useEffect, useState, useRef, ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const TWEEN_FACTOR = 0.6;

interface CarouselProps<T = unknown> {
  slides: T[];
  className?: string;
  slideClassName?: string;
  containerClassName?: string;
  renderSlide: (slide: T, index: number, tweenValue: number) => ReactNode;
  renderArrowButton?: (
    direction: 'left' | 'right',
    onClick: () => void,
    disabled: boolean
  ) => ReactNode;
  renderPagination?: (
    total: number,
    selectedIndex: number,
    onDotClick: (index: number) => void
  ) => ReactNode;
  showArrows?: boolean;
  showPagination?: boolean;
}

export default function Carousel<T = unknown>({
  slides,
  className = '',
  slideClassName = '',
  containerClassName = '',
  renderSlide,
  renderArrowButton,
  renderPagination,
  showArrows = true,
  showPagination = true,
}: CarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback(() => {
    if (!emblaApi) return;
    tweenFactor.current = TWEEN_FACTOR * emblaApi.scrollSnapList().length;
  }, [emblaApi]);

  const updateTweenValues = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (snapIndex === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) {
              diffToTarget = scrollSnap - (1 + scrollProgress);
            }
            if (sign === 1) {
              diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          }
        });
      }

      const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
      return Math.max(0, Math.min(1, tweenValue));
    });

    setTweenValues(styles);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor();
    updateTweenValues();
    onSelect();

    emblaApi
      .on('select', onSelect)
      .on('reInit', onSelect)
      .on('reInit', setTweenFactor)
      .on('reInit', updateTweenValues)
      .on('scroll', updateTweenValues)
      .on('slideFocus', updateTweenValues);

    return () => {
      emblaApi
        .off('select', onSelect)
        .off('reInit', onSelect)
        .off('reInit', setTweenFactor)
        .off('reInit', updateTweenValues)
        .off('scroll', updateTweenValues)
        .off('slideFocus', updateTweenValues);
    };
  }, [emblaApi, onSelect, setTweenFactor, updateTweenValues]);

  const defaultArrowButton = (
    direction: 'left' | 'right',
    onClick: () => void,
    disabled: boolean
  ) => {
    const enabled = !disabled;
    return (
      <button
        onClick={onClick}
        disabled={!enabled}
        className={`flex size-10 md:size-12 lg:size-[66px] rounded-full border-2 lg:border-4 border-muted-text items-center justify-center transition-all cursor-pointer shrink-0 ${
          direction === 'left' ? '' : 'rotate-180'
        } ${enabled ? 'hover:border-main-text hover:bg-main-text/10' : 'opacity-50'}`}
        aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-muted-text size-4 md:size-5 lg:size-6"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  };

  const defaultPagination = (
    total: number,
    selectedIndex: number,
    onDotClick: (index: number) => void
  ) => (
    <div className="flex gap-3 md:gap-3 lg:gap-[18px] items-center justify-center w-full mt-6 md:mt-8 lg:mt-10">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`rounded-full transition-all cursor-pointer ${
            i === selectedIndex
              ? 'bg-main-text w-10 md:w-10 lg:w-[55px] h-3 md:h-3 lg:h-[18px]'
              : 'border-2 border-muted-text size-3 md:size-3 lg:size-[18px] hover:border-main-text'
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );

  return (
    <div className={`w-full overflow-hidden ${className}`.trim()}>
      <div
        className={`flex gap-4 lg:gap-6 items-center w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 ${containerClassName}`.trim()}
      >
        {showArrows &&
          (renderArrowButton
            ? renderArrowButton('left', scrollPrev, !canScrollPrev && !emblaApi)
            : defaultArrowButton(
                'left',
                scrollPrev,
                !canScrollPrev && !emblaApi
              ))}

        <div className="flex-1 overflow-hidden min-w-0" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => {
              const tweenValue = tweenValues[index] ?? 0;
              return (
                <div
                  key={index}
                  className={
                    slideClassName || 'flex-[0_0_85%] min-w-0 pl-4 pr-4'
                  }
                >
                  {renderSlide(slide, index, tweenValue)}
                </div>
              );
            })}
          </div>
        </div>

        {showArrows &&
          (renderArrowButton
            ? renderArrowButton(
                'right',
                scrollNext,
                !canScrollNext && !emblaApi
              )
            : defaultArrowButton(
                'right',
                scrollNext,
                !canScrollNext && !emblaApi
              ))}
      </div>

      {showPagination && (
        <div className="flex justify-center items-center w-full">
          {renderPagination
            ? renderPagination(slides.length, selectedIndex, scrollTo)
            : defaultPagination(slides.length, selectedIndex, scrollTo)}
        </div>
      )}
    </div>
  );
}

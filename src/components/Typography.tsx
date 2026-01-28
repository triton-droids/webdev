interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className = '' }: TypographyProps) {
  return (
    <h2
      className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-main-text ${className}`}
    >
      {children}
    </h2>
  );
}

export function CardTitle({ children, className = '' }: TypographyProps) {
  return (
    <h3
      className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-main-text ${className}`}
    >
      {children}
    </h3>
  );
}

export function HeroHeading({ children, className = '' }: TypographyProps) {
  return (
    <h1
      className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight text-main-text ${className}`}
    >
      {children}
    </h1>
  );
}

export function BodyText({
  children,
  className = '',
  size = 'base',
}: TypographyProps & {
  size?: 'sm' | 'base' | 'lg';
}) {
  const sizeClasses = {
    sm: 'text-sm md:text-base',
    base: 'text-base md:text-lg lg:text-xl',
    lg: 'text-base md:text-lg lg:text-xl xl:text-2xl',
  };

  return (
    <p
      className={`${sizeClasses[size]} text-main-text leading-relaxed font-light ${className}`}
    >
      {children}
    </p>
  );
}

interface TeamCardProps {
  icon: string;
  name: string;
  onClick?: () => void;
}

export default function TeamCard({ icon, name, onClick }: TeamCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#2A2B2D] rounded-[24px] w-[180px] md:w-[220px] lg:w-[260px] h-[220px] md:h-[260px] lg:h-[300px] flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#3A3B3D] transition-colors group"
    >
      <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] flex items-center justify-center">
        <img src={icon} alt={name} className="w-full h-full object-contain" />
      </div>
      <span className="text-xl md:text-2xl lg:text-3xl font-bold text-main-text text-center">
        {name}
      </span>
    </button>
  );
}

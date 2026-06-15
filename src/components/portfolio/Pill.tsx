type PillProps = {
  children: string;
  accent?: boolean;
};

const Pill = ({ children, accent = false }: PillProps) => {
  return (
    <span
      className={`rounded-full border px-3 py-1.5 text-xs font-bold ${
        accent
          ? "border-[#2563EB]/20 bg-[#2563EB]/10 text-[#2563EB]"
          : "border-[#E2E8F0] bg-[#F8FAFC] text-[#475569]"
      }`}
    >
      {children}
    </span>
  );
};

export default Pill;

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
}) {
  const baseStyles =
    "px-4 py-2 rounded font-medium transition duration-200 hover:cursor-pointer";

  const variants = {
    primary: "bg-[#7A9E7E] text-white hover:bg-[#D4A373] hover:cursor-pointer",
    secondary:
      "bg-[#5A3E36] text-white hover:bg-[#D4A373] hover:cursor-pointer",
    danger: "bg-red-600 text-white hover:bg-red-700 hover:cursor-pointer",
    disabled: "bg-gray-300 text-gray-600 cursor-not-allowed ",

    "olive-outline":
      "bg-white/70 border border-[#7A9E7E] text-[#7A9E7E] hover:bg-[#7A9E7E]/60 hover:text-white focus:outline-none",
  };

  const styles = disabled
    ? variants.disabled
    : variants[variant] || variants.primary;

  return (
    <button
      className={`${baseStyles} ${styles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

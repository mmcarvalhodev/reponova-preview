type Props = {
  value: number;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function StarRating({ value, size = "md", className = "" }: Props) {
  const px = size === "sm" ? 12 : size === "lg" ? 22 : 16;
  const filledPct = Math.max(0, Math.min(5, value)) * 20;

  return (
    <span
      className={`inline-flex items-center ${className}`}
      role="img"
      aria-label={`${value.toFixed(1)} de 5 estrelas`}
      title={`${value.toFixed(1)} / 5`}
    >
      <span className="relative inline-block" style={{ width: px * 5, height: px }}>
        <span className="absolute inset-0 flex" style={{ color: "var(--border)" }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={px} />
          ))}
        </span>
        <span
          className="absolute inset-0 flex overflow-hidden"
          style={{ color: "var(--star)", width: `${filledPct}%` }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={px} />
          ))}
        </span>
      </span>
    </span>
  );
}

function Star({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ flex: "0 0 auto" }}
    >
      <path d="M12 2l2.95 6.46 7.05.69-5.32 4.83 1.62 6.94L12 17.27 5.7 20.92l1.62-6.94L2 9.15l7.05-.69L12 2z" />
    </svg>
  );
}

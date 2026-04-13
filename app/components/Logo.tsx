export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "text-lg", md: "text-xl", lg: "text-2xl" };
  return (
    <span className={`font-bold tracking-tight ${sizes[size]}`}>
      <span style={{ color: "#6A8AFF" }}>H</span>
      <span style={{ color: "#A0B6D6" }}>S</span>
      <span style={{ color: "#38B6FF" }}>/</span>
      <span
        style={{
          color: "#6A8AFF",
          letterSpacing: "0.18em",
          fontSize: "0.85em",
          fontWeight: 600,
        }}
      >
        DIGITAL
      </span>
    </span>
  );
}

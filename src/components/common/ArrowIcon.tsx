interface ArrowIconProps {
  direction?: "right" | "left";
}

export default function ArrowIcon({
  direction = "right",
}: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "left" ? "arrow-icon arrow-icon--left" : "arrow-icon"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3.75 10h12.5m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

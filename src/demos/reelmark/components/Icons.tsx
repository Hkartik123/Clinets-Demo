import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LeafIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" {...props}>
      <path
        d="M29.5 6.5C19 6.4 8.2 9.1 7 18.1c-.8 5.9 4.5 9.4 9.1 7.2 8-3.7 9.4-12.4 13.4-18.8Z"
        fill="currentColor"
      />
      <path
        d="M7.4 30c4.4-7.1 9.5-10.9 17.2-15.2"
        stroke="#F5F8EF"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
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

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M7 4.8v10.4L15 10 7 4.8Z" fill="currentColor" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 26 26" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13 1.5c.9 6.3 3.2 8.6 11.5 11.5C16.2 15.9 13.9 18.2 13 24.5 12.1 18.2 9.8 15.9 1.5 13 9.8 10.1 12.1 7.8 13 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

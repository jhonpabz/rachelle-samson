interface CloudMotifProps {
  className?: string;
  opacity?: number;
}

/**
 * Traditional Chinese cloud (Xiangyun) decorative motif.
 */
export function CloudMotif({ className = '', opacity = 0.15 }: CloudMotifProps) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 120 50"
      fill="none"
      aria-hidden="true"
      style={{ opacity }}
    >
      <path
        d="M8 32
          C8 22, 18 14, 30 16
          C34 8, 48 6, 56 14
          C64 6, 80 8, 86 18
          C98 14, 112 22, 110 34
          C112 44, 98 48, 86 44
          C80 52, 64 50, 56 42
          C48 50, 34 48, 28 40
          C18 44, 8 40, 8 32Z"
        fill="currentColor"
      />
      <path
        d="M24 34
          C27 28, 37 26, 43 30
          C47 24, 57 24, 61 30
          C67 26, 77 30, 75 38
          C77 44, 67 46, 61 42
          C57 46, 47 46, 43 40
          C37 44, 27 42, 24 34Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

export const Logo = () => {
  return (
    <svg
      viewBox="0 0 680 680"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="logo-title"
    >
      <title id="logo-title">DevFolio logo</title>
      <defs>
        <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect x="90" y="90" width="500" height="500" rx="110" fill="url(#bg2)" />
      <path
        d="M 250 240 L 165 340 L 250 440"
        fill="none"
        stroke="#ffffff"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 430 240 L 515 340 L 430 440"
        fill="none"
        stroke="#ffffff"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="380"
        y1="220"
        x2="300"
        y2="460"
        stroke="#ffffff"
        strokeWidth="24"
        strokeLinecap="round"
      />
    </svg>
  );
};

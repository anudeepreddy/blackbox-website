interface BlackboxIconProps {
    className?: string
    size?: number
  }
  
  export function BlackboxIcon({ className = "", size = 32 }: BlackboxIconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Outer border - dark in light mode, light in dark mode */}
        <rect x="2" y="2" width="96" height="76" rx="16" ry="16" className="fill-slate-800 dark:fill-slate-200" />
  
        {/* Inner background - light in light mode, dark in dark mode */}
        <rect x="8" y="8" width="84" height="64" rx="12" ry="12" className="fill-slate-100 dark:fill-slate-800" />
  
        {/* Recording indicator - red circle */}
        <circle cx="75" cy="25" r="12" className="fill-red-500" />
      </svg>
    )
  }
  
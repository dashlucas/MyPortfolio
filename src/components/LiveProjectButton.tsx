import React from 'react';

interface LiveProjectButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  label?: string;
  icon?: React.ReactNode;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  className = '',
  href,
  onClick,
  label = 'LIVE PROJECT',
  icon,
}) => {
  const classes = `
    inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white/90
    font-semibold uppercase tracking-widest px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm
    transition-all duration-300 hover:border-white hover:text-white hover:bg-white/10
    active:scale-95 cursor-pointer select-none whitespace-nowrap group
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon && <span className="transition-transform group-hover:scale-110">{icon}</span>}
        <span>{label}</span>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {icon && <span className="transition-transform group-hover:scale-110">{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default LiveProjectButton;

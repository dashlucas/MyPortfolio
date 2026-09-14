import React from 'react';

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
  href?: string;
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  className = '',
  onClick,
  href = '#contact',
  label = 'Contact Me',
}) => {
  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {label}
    </span>
  );

  const style: React.CSSProperties = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
    outline: '2px solid white',
    outlineOffset: '-3px',
  };

  const classes = `
    inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest
    px-5 py-2.5 xs:px-7 xs:py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-[11px] xs:text-xs sm:text-sm md:text-base
    transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 cursor-pointer select-none
    ${className}
  `.trim();

  if (href && !onClick) {
    return (
      <a href={href} style={style} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} style={style} className={classes}>
      {content}
    </button>
  );
};

export default ContactButton;

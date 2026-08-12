function Button({ children, onClick, variant = 'primary', type = 'button', disabled = false }) {
  const baseStyles = 'px-6 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95';

  const variants = {
    primary: 'bg-teal text-white hover:bg-teal-light',
    secondary: 'bg-navy-light text-white border border-teal hover:bg-navy',
    ghost: 'bg-transparent text-teal hover:bg-navy-light',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}

export default Button;
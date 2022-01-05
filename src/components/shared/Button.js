const Button = ({ children, type, variant, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  isDisabled: false,
};

export default Button;

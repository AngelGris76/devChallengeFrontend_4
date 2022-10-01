import style from './Button.module.css';

const BUTTON_KIND = {
  primary: style.primary,
  secondary: style.secondary,
};

const BUTTON_SIZE = {
  sm: style.smallSize,
  md: style.mediumSize,
};

const Button = ({
  kind = 'primary',
  size = 'md',
  type = 'button',
  children,
  ...props
}) => {
  const extraClass = `${BUTTON_KIND[kind]} ${BUTTON_SIZE[size]}`;

  return (
    <button className={`${style.default} ${extraClass}`} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;

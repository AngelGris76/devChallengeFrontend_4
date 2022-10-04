import BUTTON_PROPERTIES from '../../constants/buttonProperties';
import style from './Button.module.css';

const BUTTON_KIND = {
  [BUTTON_PROPERTIES.primary]: style.primary,
  [BUTTON_PROPERTIES.secondary]: style.secondary,
  [BUTTON_PROPERTIES.icon]: style.iconButton,
};

const BUTTON_SIZE = {
  [BUTTON_PROPERTIES.sm]: style.smallSize,
  [BUTTON_PROPERTIES.md]: style.mediumSize,
};

const Button = ({
  kind = BUTTON_PROPERTIES.primary,
  size = BUTTON_PROPERTIES.md,
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

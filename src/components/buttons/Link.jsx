import style from './Link.module.css';

const ToggleButton = ({ children, onClick, ...props }) => {
  return (
    <a
      className={style.default}
      onClick={(ev) => {
        ev.preventDefault();
        onClick();
      }}
      {...props}
    >
      {children}
    </a>
  );
};

export default ToggleButton;

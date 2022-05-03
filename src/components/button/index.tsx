import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
}

const Button = ({ primary, modifier, children, ...rest }: IButton) => {
  const baseStyle = `bg-white font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary ? `text-custom-blue` : `text-gray-600`;

  return (
    <button type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;

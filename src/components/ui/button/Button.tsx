import { MouseEventHandler, ReactNode } from 'react';
import s from './Button.module.scss';
import i from './Icon.module.scss';

type TSize = 'small' | 'medium' | 'large';
type TColor = 'color-black' | 'color-blue' | 'color-purple' | 'color-green' | 'color-grey';
type TAppearance = 'black' | 'blue' | 'light_blue' | 'gray' | 'red' | 'purple' | 'green';

export type ButtonProps = {
  size?: TSize;
  appearance?: TAppearance;
  color?: TColor;
  href?: string;
  tag?: 'a' | 'button' | 'div';
  onClick?: MouseEventHandler<HTMLElement>;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  icon?: string;
};

export const Button = ({ size, color, appearance, tag, href, children, onClick, className, icon }: ButtonProps) => {
  const Component = href ? 'a' : tag;
  const additionalClasses = [
    s.button,
    appearance && s[appearance],
    size && s[size],
    color && s[color],
    className,
  ].filter(Boolean).join(' ');

  const iconComponentClass = [
    i.icon,
    icon && i[icon],
    size && i[size],
  ].filter(Boolean).join(' ');

  const iconComponent = (
    <i className={iconComponentClass} />
  );

  return (
    <Component
      className={additionalClasses}
      onClick={onClick}
      href={href}
    >
      {icon && iconComponent}
      {children}
    </Component>
  );
};

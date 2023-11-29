import { MouseEventHandler, ReactNode } from "react";
import s from './Button.module.scss'

type TSize = 'small' | 'medium' | 'large';
type TColor = 'color__black' | 'color__blue' | 'color__purple';
type TAppearance = 'black' | 'blue' | 'gray' | 'red' | 'purple';

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
};

export const Button = ({ size, color, appearance, tag, href, children, onClick, className }: ButtonProps) => {
  const Component = href ? 'a' : tag;
  const arrayClassName = ['', appearance, size, color];
  const prefixedClassNames = arrayClassName.map((name) => s.button + name).join(' ');

  return (
    <Component
      className={prefixedClassNames}
      onClick={onClick}
      href={href}
    >
      {children}
    </Component>
  );
};

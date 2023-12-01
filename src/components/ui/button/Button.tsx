import { MouseEventHandler, ReactNode } from "react";
import {Icon} from "@/components/ui";
import { Size, Appearance, Color} from "./types";
import s from './Button.module.scss';

export type ButtonProps = {
  size?: Size;
  appearance?: Appearance;
  color?: Color;
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

  const iconComponent = (
    <Icon icon={icon} size={size} />
  )

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

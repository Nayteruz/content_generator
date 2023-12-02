import { MouseEventHandler, ReactNode } from 'react';
import { TSize, TAppearance, TColor } from './types';
import { Icon } from '@/components/ui';
import s from './Button.module.scss';

export type TButtonProps = {
  size?: TSize;
  appearance?: TAppearance;
  color?: TColor;
  href?: string;
  tag?: 'a' | 'button' | 'div';
  onClick?: MouseEventHandler<HTMLElement>;
  children?: ReactNode;
  className?: string;
  icon?: string;
};

export const Button = ({ size, color, appearance, tag, href, children, onClick, className, icon }: TButtonProps) => {
  const Component = href ? 'a' : tag;
  const additionalClasses = [s.button, appearance && s[appearance], size && s[size], color && s[color], className]
    .filter(Boolean)
    .join(' ');

  const iconComponent = <Icon icon={icon} size={size} />;

  return (
    <Component className={additionalClasses} onClick={onClick} href={href}>
      {icon && iconComponent}
      {children}
    </Component>
  );
};

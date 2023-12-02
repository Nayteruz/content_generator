import { TSize } from './types';
import i from './Icon.module.scss';

export type TIconProps = {
  icon?: string;
  size?: TSize;
};

export const Icon = ({ icon, size }: TIconProps) => {
  const iconComponentClass = [i.icon, icon && i[icon], size && i[size]].filter(Boolean).join(' ');

  return <i className={iconComponentClass} />;
};

import React from "react";
import { Size } from "./types";
import i from './Icon.module.scss';

export type IconProps = {
  icon?: string;
  size?: Size;
};

export const Icon = ({ icon, size}: IconProps) => {
  const iconComponentClass = [
    i.icon,
    icon && i[icon],
    size && i[size],
  ].filter(Boolean).join(' ');

  return (
    <i className={iconComponentClass}></i>
  );
};

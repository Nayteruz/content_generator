import { ChangeEventHandler, FocusEventHandler, MouseEventHandler } from 'react';
import s from './Input.module.scss';

export type InputProps = {
  name?: string;
  onChange?: ChangeEventHandler<HTMLElement>;
  onClick?: MouseEventHandler<HTMLElement>;
  onFocus?: FocusEventHandler<HTMLElement>;
  placeholder?: string;
  value?: string;
};

export const Input = ({
  name,
  onClick,
  onChange,
  onFocus,
  placeholder,
  value,
}: InputProps) => (
  <label className={s.inputLabel}>
    <div className={s.title}>
      <div className={s.name}>{name}</div>
    </div>
    <input
      type="text"
      className={s.input}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      onClick={onClick}
      onFocus={onFocus}
    />
  </label>
);

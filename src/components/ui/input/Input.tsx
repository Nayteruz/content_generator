import { ChangeEventHandler, MouseEventHandler } from 'react';
import s from './Input.module.scss';

export type TInputProps = {
  name?: string;
  onChange?: ChangeEventHandler<HTMLElement>;
  onClick?: MouseEventHandler<HTMLElement>;
  placeholder?: string;
  value?: string;
};

export const Input = ({ name, onClick, onChange, placeholder, value }: TInputProps) => (
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
    />
  </label>
);

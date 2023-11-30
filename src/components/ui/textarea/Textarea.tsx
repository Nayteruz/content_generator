import { ChangeEvent, FocusEvent, MouseEventHandler, useState } from "react";
import s from "./Textarea.module.scss";

export type TextareaProps = {
  name?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: MouseEventHandler<HTMLElement>;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
  rows?: number;
  value?: string;
  formField?: boolean;
};

export const Textarea = ({
   name,
   onClick,
   onChange,
   onFocus,
   placeholder,
   maxLength,
   rows,
   value,
   formField,
 }: TextareaProps) => {
  const [characterCount, setCharacterCount] = useState(value?.length || 0);
  const calculateLabelClass = (): string => {
    if (characterCount > 500) {
      return s.labelRed;
    } else if (characterCount > 200) {
      return s.labelYellow;
    } else {
      return s.labelGrey;
    }
  };
  const isError = !formField ? characterCount > 500 : false;
  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const currentCharacterCount = event.target.value.length;
    setCharacterCount(currentCharacterCount);

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <label className={s.textareaLabel}>
      <div className={s.title}>
        <div className={s.name}>{name}</div>
        {!formField && (
          <div className={`${s.counter} ${isError ? s.error : ""} ${calculateLabelClass()}`}>{`${characterCount} из 500`}</div>
        )}
      </div>
      <textarea
        className={`${s.textarea} ${isError ? s.error : ""}`}
        onChange={handleTextareaChange}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        value={value}
        onClick={onClick}
        onFocus={onFocus}
      />
      {isError && <div className={s.errorMessage}>Превышен лимит символов (500 макс.)</div>}
    </label>
  );
};

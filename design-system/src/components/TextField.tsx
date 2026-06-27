import * as React from 'react';

export interface TextFieldOption {
  label: string;
  value: string;
}

export interface TextFieldProps {
  /** Field label. */
  label: React.ReactNode;
  /** Control kind. */
  as?: 'input' | 'textarea' | 'select';
  /** Input type when `as="input"`. */
  type?: string;
  /** name / id for the control. */
  name?: string;
  /** Placeholder text. */
  placeholder?: string;
  /** Options when `as="select"`. */
  options?: TextFieldOption[];
  /** Span the full width of a form row. */
  fullWidth?: boolean;
  /** Error message — shown in red and marks the control invalid. */
  error?: React.ReactNode;
  /** Default value (uncontrolled). */
  defaultValue?: string;
  /** Required marker for the native control. */
  required?: boolean;
  className?: string;
}

/**
 * A labelled form control — text input, textarea, or select — styled with the
 * brand's amber focus ring. Pass `error` to show the inline error state.
 */
export function TextField({
  label,
  as = 'input',
  type = 'text',
  name,
  placeholder,
  options,
  fullWidth = false,
  error,
  defaultValue,
  required,
  className,
}: TextFieldProps) {
  const fieldClass = ['input-field', error ? 'invalid' : ''].filter(Boolean).join(' ');
  return (
    <div className={['form-group', fullWidth ? 'full-width' : '', className].filter(Boolean).join(' ')}>
      <label htmlFor={name}>{label}</label>
      {as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          className={fieldClass}
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
        />
      ) : as === 'select' ? (
        <select id={name} name={name} className={fieldClass} defaultValue={defaultValue} required={required}>
          {options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          className={fieldClass}
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
        />
      )}
      {error ? <div className="field-error">{error}</div> : null}
    </div>
  );
}

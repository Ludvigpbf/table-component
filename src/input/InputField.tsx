import { useEffect, useState } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value?: string | number;
  className?: string;
  containerClassName?: string;
  placeholder?: string;
  id?: string;
  "data-id"?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  className,
  containerClassName,
  placeholder,
  id,
  "data-id": dataId,
  required,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event); // Kalla på onChange om den skickats in som prop
    setHasValue(!!event.target.value); // Kontrollera om det finns ett värde i fältet
  };

  useEffect(() => {
    setHasValue(!!value); // Kolla om det redan finns ett värde
  }, [value]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false); // Ta bort fokusstatus när användaren lämnar fältet
    setHasValue(!!event.target.value); // Kolla om fältet har ett värde efter blur
  };
  return (
    <div className={`input-container ${containerClassName} ${isFocused || hasValue ? 'focused' : ''}`}>
      <label htmlFor={id} className="floating-label">
        {label}
    {/*   {required && <span className="required-asterisk">*</span>} */}
      </label>
      <input
        id={id}
        className={`input-field ${className}`}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-id={dataId}
        required={required}
      />
    </div>
  );
};

export default InputField;

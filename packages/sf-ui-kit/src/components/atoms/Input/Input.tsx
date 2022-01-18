import React, { memo } from 'react';
import StyledInput from './styled/StyledInput';

interface Props {
  label?: string;
  placeholder: string;
  onChange: any;
  onBlur?: any;
  name?: any;
  inputRef?: Function;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ onChange, onBlur, name, label, placeholder, ...rest }, ref) => {
    return (
      <StyledInput>
        {label && <label className="title_label">{label}</label>}
        <input
          {...rest}
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          type="text"
          placeholder={placeholder}
        />
      </StyledInput>
    );
  }
);

export default memo(Input);

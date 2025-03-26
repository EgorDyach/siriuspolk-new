import Select, {
  GroupBase,
  MultiValue,
  OptionsOrGroups,
  StylesConfig,
} from 'react-select';
import React, { FC, ReactNode } from 'react';
import makeAnimated from 'react-select/animated';

interface SelectProps {
  className?: string;
  onChange?: (e: MultiValue<unknown>) => void;
  placeholder?: ReactNode;
  options?: OptionsOrGroups<unknown, GroupBase<unknown>>;
  styles?: StylesConfig<unknown, true, GroupBase<unknown>>;
  closeMenuOnSelect?: boolean;
  isMulti?: true;
  defaultValue?: unknown;
  value?: unknown;
}
const MySelect: FC<SelectProps> = ({
  className,
  onChange,
  placeholder,
  options,
  closeMenuOnSelect,
  styles,
  isMulti,
  defaultValue,
  value,
}) => {
  const animatedComponents = makeAnimated();
  return (
    <Select
      className={className}
      styles={styles}
      onChange={onChange}
      closeMenuOnSelect={closeMenuOnSelect}
      components={animatedComponents}
      isMulti={isMulti}
      defaultValue={defaultValue}
      options={options}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default MySelect;

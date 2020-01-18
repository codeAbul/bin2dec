import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

function useInputField({
  inputId,
  label,
  dataInput,
  initialValue = ""
}: Props) {
  const [value, setValue] = useState(initialValue);
  const inFocus = useRef(false);
  const InputField = (
    <div data-input={dataInput}>
      <label htmlFor={inputId}>{label}</label>
      <div className={"input-container"}>
        <input
          type={"number"}
          id={inputId}
          value={value}
          onInput={onInput}
          onChange={onInput}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <CopyToClipboard dataInput={dataInput} onClick={onClick} />
      </div>
    </div>
  );

  return {
    InputField,
    setValue,
    value,
    inFocus: inFocus.current
  };

  function onInput(
    event: FormEvent<HTMLInputElement> | ChangeEvent,
    { target } = event
  ) {
    if (target instanceof HTMLInputElement) {
      const { value: inputValue } = target;
      if (dataInput == "binary") {
        if (!Number.isNaN(+`0b${inputValue}`)) {
          setValue(inputValue);
        }
      } else if (dataInput == "decimal") {
        if (!Number.isNaN(+inputValue)) {
          setValue(inputValue);
        }
      }
    }
  }

  function onBlur() {
    inFocus.current = false;
  }

  function onFocus() {
    inFocus.current = true;
  }

  function onClick() {
    // TODO: Display Alert that the value has been successfully copied
    navigator.clipboard.writeText(value);
  }
}

type Props = {
  inputId: string;
  label: string;
  dataInput: "binary" | "decimal";
  initialValue?: string;
};

export default useInputField;

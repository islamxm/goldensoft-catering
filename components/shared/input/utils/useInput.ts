import { useState, FocusEvent, ChangeEvent, useRef } from "react";
import { UseInputArgs } from "../types";
import { useMask } from "@react-input/mask";


const useInput = ({
  maskOptions,
  onFocus,
  onBlur,
  onChange
}:UseInputArgs) => {
  const inputRef = useMask(maskOptions)
  const [focused, setFocused] = useState(false)

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(true)
    onFocus && onFocus(e)
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(false)
    onBlur && onBlur(e)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
  }

  return {
    focused,
    inputRef,

    handleFocus,
    handleBlur,
    handleChange
  }
}

export default useInput;
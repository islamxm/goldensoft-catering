import { useState, useEffect, ChangeEvent } from "react"

type T = {
  defaultValue: number,
  interval: [number, number],
  onChange?: (value: number) => void
}

const useCounter = ({
  defaultValue, 
  interval,
  onChange
}: T) => {
  const [value, setValue] = useState<number>(0)

  useEffect(() => {
    if(defaultValue <= interval[1] && defaultValue >= interval[0]) setValue(defaultValue)
  }, [defaultValue, interval])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)
    if(val >= interval[0] && val <= interval[1]) {
      setValue(val)
    }
  }

  const decrement = () => {
    if(value > interval[0]) {
      setValue(s => {
        onChange && onChange(s - 1)
        return s - 1
      })
    }
  }

  const increment = () => {
    if(value < interval[1]) {
      setValue(s => {
        onChange && onChange(s + 1)
        return s + 1
      })
    }
  }


  return {
    value,
    decrement,
    increment,
    handleChange
  }
}

export default useCounter;
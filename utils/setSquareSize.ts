const setSquareSize = (value?: number | string) => {
  if(typeof value === 'number') {
    return {
      width: value,
      height: value
    }
  } else {
    return {}
  }
}

export default setSquareSize;
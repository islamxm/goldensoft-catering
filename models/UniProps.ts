type UniProps<T extends object> = T & {
  id: number | string,
}

export default UniProps;
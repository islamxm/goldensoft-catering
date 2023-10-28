type T = (classNames: (any)[]) => string
const setClassNames:T = (classNames) => {
  const filtered = classNames.filter((i:any) => typeof i === 'string' && i !== undefined);
  return filtered.join(' ')
};
export default setClassNames;
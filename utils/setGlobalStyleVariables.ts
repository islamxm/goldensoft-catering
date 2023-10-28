import globalStyleVars from "@/data/styleVars";
type StylesType = typeof globalStyleVars;

const setGlobalStyleVariables = (styles: StylesType): void => {
  if(process?.browser) {
    styles.forEach(variable => {
      document.documentElement.style.setProperty(
        `--${variable.title}`,
        `${variable.value}`
      )
    })
  }
}

export default setGlobalStyleVariables;
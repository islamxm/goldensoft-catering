import { useContext, useEffect } from "react";
import { AnimationContext } from "../Animated";

const useAnimated = () => {
  const animateOptions = useContext(AnimationContext)
  useEffect(() => console.log(animateOptions), [animateOptions])
  return {animateOptions};
}

export default useAnimated;
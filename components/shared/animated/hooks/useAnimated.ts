import { useContext, useEffect } from "react";
import { AnimationContext } from "../Animated";

const useAnimated = () => {
  const animateOptions = useContext(AnimationContext)
  return {animateOptions};
}

export default useAnimated;
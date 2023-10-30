import {MotionProps} from 'framer-motion';

const componentBaseAnimationProps: MotionProps = {
  initial:{ opacity: 0, scale: 0.98 },
  animate:{ opacity: 1, scale: 1 },
  exit:{ opacity: 0, scale: 0.8 },
  transition:{duration: 0.3},
}

export default componentBaseAnimationProps
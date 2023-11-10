import styles from './styles.module.scss';
import { FC } from 'react'
import PropsType from './types';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody
} from '@chakra-ui/react'

const WithHint:FC<PropsType> = ({
  options,
  children,
  isShowHintIcon,
  content
}) => {

  return (
    <Popover
      {...options}
      >
      <PopoverTrigger>
        <div className={styles.trigger}>
          {children}
          {isShowHintIcon && (
            <div className={styles.icon}>
              <AiOutlineInfoCircle/>
            </div>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className={styles.content}>
        <PopoverBody>
          {content}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default WithHint;
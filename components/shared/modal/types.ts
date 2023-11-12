import { Modal } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type ModalProps = typeof Modal.defaultProps

type PropsType = ModalProps & PropsWithChildren & {
  contentWidth?: number | string,
  contentClassName?: string
}
export default PropsType;
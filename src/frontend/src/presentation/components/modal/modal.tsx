import React from "react";

import Styles from "./modal.module.scss";
import { IoCloseOutline } from "react-icons/io5";
type Props = {
  title: string;
  content: any;
  close: () => void;
  testid: string
};

const Modal: React.FC<Props> = ({ testid, title, content, close }: Props) => {
  return (
    <div data-testid={testid} className={Styles.modal}>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <h2>{title}</h2>
          <IoCloseOutline onClick={() => close()} size={24} />
        </div>
        
        {content}
      </div>
    </div>
  );
};

export default Modal;

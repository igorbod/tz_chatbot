import cls from "./ChatHeader.module.scss";
import {FC} from "react";


interface IChatHeader {
  title?: string;
}

const ChatHeader: FC<IChatHeader> = (props) => {

  const {
    title = 'AI default title',
  } = props

  return (
    <div className={cls.root}>
      <div className={cls.root__inner}>
        <span className={cls.root__title}>{title}</span>
      </div>
    </div>
  )
}

export default ChatHeader;
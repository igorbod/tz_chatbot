import cls from "./ChatMessage.module.scss";
import {FC} from "react";
import { IChatMessage } from "@/types/IChatMessage";
import UserDefault from "@/components/icons/UserDefault";

const ChatMessage: FC<IChatMessage> = (props) => {

  const {
    time = new Date(),
    message,
    userAvatar,
    username = 'Aleksandar Sikich',
    isOwner,
  } = props

  return (
    <div className={cls.root} data-is-owner={isOwner}>
      <div className={cls.root__inner}>
        <div className={cls.root__avatar}>
          {
            userAvatar ?
              <img className={cls.root__avatarImage} src={userAvatar} alt=""/> :
              <UserDefault />
          }
        </div>

        <div className={cls.root__messageWrapper}>
          <span className={cls.root__time}>{new Date(time).toLocaleString()}</span>
          <span className={cls.root__username}>{username}</span>
          <div className={cls.root__text}>{message}</div>
        </div>

      </div>
    </div>
  )
}

export default ChatMessage;
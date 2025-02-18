import cls from "./Chat.module.scss";
import {FC} from "react";
import ChatHeader from "../ChatHeader/ChatHeader.tsx";

interface IChat {
  isVisible?: boolean;
}

const Chat: FC<IChat> = (props) => {

  const {
    isVisible = false,
  } = props

  return (
    <div className={cls.root}>
      <ChatHeader
        title="AI Chatbot Jarvis"
      />
      <div className="body">
        <div className="chatList">

        </div>
        <div className="compose">
          <div className="compose__inner">
            <div className="compose__input"></div>
            <div className="compose__send"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat;
import cls from "./Chat.module.scss";
import {FC} from "react";
import ChatHeader from "../ChatHeader/ChatHeader.tsx";
import ChatList from "@modules/ChatBot/components/ChatList/ChatList";
import ChatCompose from "@modules/ChatBot/components/ChatCompose/ChatCompose";

interface IChat {
  isVisible?: boolean;
}

const Chat: FC<IChat> = () => {

  /*const {
    isVisible = false,
  } = props*/

  const onCompose = () => {
    console.log('Click compose')
  }

  return (
    <div className={cls.root}>
      <div className={cls.root__inner}>
        <ChatHeader
          title="AI Chatbot Jarvis"
        />
        <ChatList />
        <ChatCompose
          onCompose={onCompose}
        />
      </div>
    </div>
  )
}

export default Chat;
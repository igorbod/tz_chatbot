import cls from "./Chat.module.scss";
import {FC, useEffect} from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatList from "../ChatList/ChatList";
import ChatCompose from "../ChatCompose/ChatCompose";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {chatMessages} from "@/store/reducers/chat/selectors";


interface IChat {
  isVisible?: boolean;
}

const Chat: FC<IChat> = () => {

  const dispatch = useAppDispatch();
  const messages = useAppSelector(chatMessages);

  useEffect(() => {

  }, [])

  const onCompose = () => {
    console.log('Click compose')
  }

  return (
    <div className={cls.root}>
      <div className={cls.root__inner}>
        <ChatHeader
          title="AI Chatbot Jarvis"
        />
        <ChatList messages={messages} />
        <ChatCompose
          onCompose={onCompose}
        />
      </div>
    </div>
  )
}

export default Chat;
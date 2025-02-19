import cls from "./Chat.module.scss";
import {FC, useEffect} from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatList from "../ChatList/ChatList";
import ChatCompose from "../ChatCompose/ChatCompose";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {
  chatMessages,
  chatLoadingMessage,
  chatIsLoading,
} from "@/store/reducers/chat/selectors";
import {initChat} from "@/store/reducers/chat/thunks/chatInit";
import {UUID} from "@/constants/api";
import { classNames } from "@/helpers";
import Loader from "@/components/ui/Loader/Loader";
import {CHAT_TITLES} from "../../constants";


interface IChat {
  isVisible?: boolean;
}

const Chat: FC<IChat> = () => {

  const dispatch = useAppDispatch();
  const messages = useAppSelector(chatMessages);
  const isChatLoading = useAppSelector(chatIsLoading);
  const chatLoaderMessage = useAppSelector(chatLoadingMessage);

  useEffect(() => {
    const cuid = localStorage.getItem('chatCUID') ?? ''
    dispatch(initChat({
      uuid: UUID,
      cuid,
    }))
  }, [])

  const onCompose = () => {
    console.log('Click compose')
  }

  const chatClasses = classNames([cls.root, isChatLoading ? cls.root_loading : ''])

  return (
    <div className={chatClasses}>
      <div className={cls.root__inner}>
        <ChatHeader
          title="AI Chatbot Jarvis"
        />
        {
          isChatLoading &&
            <div className={cls.root__loader}>
                <Loader message={chatLoaderMessage} />
            </div>
        }
        <ChatList messages={messages} />
        <ChatCompose
          onCompose={onCompose}
        />
      </div>
    </div>
  )
}

export default Chat;
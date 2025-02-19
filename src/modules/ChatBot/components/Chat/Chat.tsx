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
  isComposeAvailable,
} from "@/store/reducers/chat/selectors";
import {initChat} from "@/store/reducers/chat/thunks/chatInit";
import {UUID} from "@/constants/api";
import { classNames } from "@/helpers";
import Loader from "@/components/ui/Loader/Loader";
import {requestChat} from "@/store/reducers/chat/thunks/chatRequest";

interface IChat {
  isVisible?: boolean;
}

const Chat: FC<IChat> = () => {

  const dispatch = useAppDispatch();
  const messages = useAppSelector(chatMessages);
  const isChatLoading = useAppSelector(chatIsLoading);
  const isComposeFunctionalityAvailable = useAppSelector(isComposeAvailable) && !isChatLoading;
  const chatLoaderMessage = useAppSelector(chatLoadingMessage);

  useEffect(() => {
    const cuid = localStorage.getItem('chatCUID') ?? ''
    dispatch(initChat({
      uuid: UUID,
      cuid,
    }))
  }, [])

  const onCompose = (composeTextValue: string) => {
    if (composeTextValue.trim().length === 0) return

    console.log('Click compose - ', composeTextValue)

    dispatch(requestChat({
      cuid: localStorage.getItem('chatCUID') ?? '',
      text: composeTextValue,
    }))
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
          isComposeAvailable={isComposeFunctionalityAvailable}
        />
      </div>
    </div>
  )
}

export default Chat;
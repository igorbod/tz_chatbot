import cls from "./Chat.module.scss";
import {FC, useEffect} from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatList from "../ChatList/ChatList";
import ChatCompose from "../ChatCompose/ChatCompose";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
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
import {
  addNewMessage,
} from "@/store/reducers/chat/chatSlice";
import {
  USER_DEFAULT_AVATAR,
} from "@/constants/mock";

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
    let newTime = new Date().getTime()

    dispatch(addNewMessage({
      id: window.crypto.randomUUID(),
      time: newTime,
      username: 'You',
      message: composeTextValue,
      isOwner: true,
      userAvatar: USER_DEFAULT_AVATAR,
    }))

    dispatch(requestChat({
      cuid: localStorage.getItem('chatCUID') ?? '',
      text: composeTextValue,
      messageID: newTime,
    }))
  }

  const chatClasses = classNames([cls.root, isChatLoading ? cls.root_loading : ''])

  return (
    <div className={chatClasses}>
      <div className={cls.root__inner}>
        <ChatHeader
          title="AI Chatbot"
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
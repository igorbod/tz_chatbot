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
import {eventChat} from "@/store/reducers/chat/thunks/chatEvent";
import {EVENTS_ID, UUID} from "@/constants/api";
import { classNames } from "@/helpers";
import Loader from "@/components/ui/Loader/Loader";
import {requestChat} from "@/store/reducers/chat/thunks/chatRequest";
import {
  addNewMessage,
} from "@/store/reducers/chat/chatSlice";
import {
  USER_DEFAULT_AVATAR,
} from "@/constants/mock";
import { MESSAGES } from "@/constants/localStorage";

const Chat: FC = () => {

  const dispatch = useAppDispatch();
  const messages = useAppSelector(chatMessages);
  const isChatLoading = useAppSelector(chatIsLoading);
  const isComposeFunctionalityAvailable = useAppSelector(isComposeAvailable) && !isChatLoading;
  const chatLoaderMessage = useAppSelector(chatLoadingMessage);

  useEffect(() => {
    const cuid = localStorage.getItem('chatCUID') ?? ''

    const tryInitChat = async () => {
      await dispatch(initChat({
        uuid: UUID,
        cuid,
      }))
    }

    tryInitChat()
      .then(() => {
        if (!localStorage.getItem(MESSAGES)) {
          dispatch(eventChat({
            cuid: localStorage.getItem('chatCUID') ?? '',
            euid: EVENTS_ID.READY,
          }))
        }
      })
  }, [])

  const onCompose = (composeTextValue: string) => {
    dispatch(addNewMessage({
      id: window.crypto.randomUUID(),
      time: new Date().getTime(),
      username: 'You',
      message: composeTextValue,
      isOwner: true,
      userAvatar: USER_DEFAULT_AVATAR,
    }))

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
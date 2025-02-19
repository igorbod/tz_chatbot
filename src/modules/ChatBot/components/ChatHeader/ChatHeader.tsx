import Button from "@/components/ui/Button/Button";
import cls from "./ChatHeader.module.scss";
import {FC} from "react";
import ClearHistory from "@/components/icons/ClearHistory";
import {
  chatIsLoading,
  chatMessages,
} from "@/store/reducers/chat/selectors";
import {
  useAppDispatch,
  useAppSelector,
} from "@/hooks/redux";
import { clearMessages } from "@/store/reducers/chat/chatSlice";
import { initChat } from "@/store/reducers/chat/thunks/chatInit";
import {EVENTS_ID, UUID } from "@/constants/api";
import { eventChat } from "@/store/reducers/chat/thunks/chatEvent";

interface IChatHeader {
  title?: string;
}

const ChatHeader: FC<IChatHeader> = (props) => {

  const {
    title = 'AI default title',
  } = props

  const dispatch = useAppDispatch();

  const isChatLoading = useAppSelector(chatIsLoading)
  const messages = useAppSelector(chatMessages)

  const isButtonClearDisabled = isChatLoading && messages.length > 0

  const handleClearHistory = () => {

    dispatch(clearMessages())
    const tryInitChat = async () => {
      await dispatch(initChat({
        uuid: UUID,
      }))
    }

    tryInitChat()
      .then(() => {
        dispatch(eventChat({
          cuid: localStorage.getItem('chatCUID') ?? '',
          euid: EVENTS_ID.READY,
        }))
      })
  }

  return (
    <div className={cls.root}>
      <div className={cls.root__inner}>
        <span className={cls.root__title}>{title}</span>
        <div className={cls.root__controls}>
          <Button
            children={<ClearHistory />}
            title="Clear history and start new chat"
            disabled={isButtonClearDisabled}
            onClick={handleClearHistory}
          />
        </div>
      </div>
    </div>
  )
}

export default ChatHeader;
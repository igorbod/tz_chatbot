import cls from "./ChatList.module.scss";
import {FC, useEffect, useRef} from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import {IChatMessage} from "@/types/IChatMessage";

interface IChatList {
  messages: IChatMessage[];
}

const ChatList: FC<IChatList> = (props) => {

  const bottomRef = useRef<HTMLDivElement>(null);

  const {
    messages = [],
  } = props

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: 'smooth',
        block: "end",
      });
    }
  }, [messages]);

  return (
    <div className={cls.root}>
      <div className={cls.root__inner}
           ref={bottomRef}
      >
        {
          messages.map(({id, time, message, isOwner, username, userAvatar}) => {
            return (
              <ChatMessage
                id={id}
                key={id}
                time={time}
                message={message}
                isOwner={isOwner}
                username={username}
                userAvatar={userAvatar}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default ChatList;
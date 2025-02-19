import cls from "./ChatList.module.scss";
import {FC} from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import {IChatMessage} from "@/types/IChatMessage";

interface IChatList {
  messages: IChatMessage[];
}

const ChatList: FC<IChatList> = (props) => {

/*  const {
    messages = [
      {

      }
    ],
  } = props*/

  return (
    <div className={cls.root}>
      <div className={cls.root__inner}>
        {/*{
          Array(...Array(messagesCount)).map((item, index) => {
            return <ChatMessage key={index} />
          })
        }*/}
      </div>
    </div>
  )
}

export default ChatList;
import cls from "./ChatList.module.scss";
import {FC} from "react";
import {getRandomIntInclusive} from "../../../../helpers";
import ChatMessage from "../ChatMessage/ChatMessage";

interface IChatList {
  messages: any;
}

const ChatList: FC<IChatList> = (props) => {

/*  const {
    messages = [
      {

      }
    ],
  } = props*/

  const messagesCount = getRandomIntInclusive(1, 3)

  return (
    <div className={cls.root}>
      <div className={cls.root__inner}>
        {
          Array(...Array(messagesCount)).map((item, index) => {
            return <ChatMessage key={index} />
          })
        }
      </div>
    </div>
  )
}

export default ChatList;
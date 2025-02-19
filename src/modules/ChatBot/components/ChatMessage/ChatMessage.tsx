import cls from "./ChatMessage.module.scss";
import {FC} from "react";
import { getRandomIntInclusive } from "@/helpers";
import { IChatMessage } from "@/types/IChatMessage";

const ChatMessage: FC<IChatMessage> = (props) => {

  const {
    time = new Date(),
    message = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    userAvatar = 'https://mighty.tools/mockmind-api/content/human/80.jpg',
    username = 'Aleksandar Sikich',
    isOwner = getRandomIntInclusive(1, 10) > 5,
  } = props

  return (
    <div className={cls.root} data-is-owner={isOwner}>
      <div className={cls.root__inner}>
        <div className={cls.root__avatar}>
          <img className={cls.root__avatarImage} src={userAvatar} alt=""/>
        </div>

        <div className={cls.root__messageWrapper}>
          <span className={cls.root__time}>{time.toLocaleDateString() + ' ' + time.toLocaleTimeString()}</span>
          <span className={cls.root__username}>{username}</span>
          <div className={cls.root__text}>{message}</div>
        </div>

      </div>
    </div>
  )
}

export default ChatMessage;
import cls from "./ChatCompose.module.scss";
import {FC} from "react";
import Button from "@components/ui/Button/Button";

interface IChatCompose {
  onCompose?: () => void;
}

const ChatCompose: FC<IChatCompose> = (props) => {

    const {
      onCompose
    } = props

  return (
    <div className={cls.root}>
      <div className={cls.root__inner}>
        <label className={cls.root__inputWrapper}>
          <input
            placeholder="Type something..."
            type="text"
            className={cls.root__input}
            name="compose_input"
            id="compose_input"
          />
          <Button
            buttonTitle="Send"
            customClasses={[cls.root__sendButton]}
            onClick={onCompose}
          />
        </label>
      </div>
    </div>
  )
}

export default ChatCompose;
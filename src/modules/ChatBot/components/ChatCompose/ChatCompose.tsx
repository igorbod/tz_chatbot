import Button from "@/components/ui/Button/Button";
import cls from "./ChatCompose.module.scss";
import {FC, useState} from "react";
import * as React from "react";

interface IChatCompose {
  isComposeAvailable: boolean;
  onCompose: (value: string) => void;
}

const ChatCompose: FC<IChatCompose> = (props) => {

  const [composeTextValue, setComposeTextValue] = useState('')

  const {
    isComposeAvailable = false,
    onCompose
  } = props

  const sendValidatedMessage = () => {
    const trimmedComposeValue = composeTextValue.trim();

    if (trimmedComposeValue.length === 0) return

    onCompose(composeTextValue)
    setComposeTextValue('')
  }

  const onEnterPressed = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendValidatedMessage()
  }

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
            value={composeTextValue}
            onInput={(e) => setComposeTextValue(e.currentTarget.value)}
            autoComplete="off"
            onKeyUp={onEnterPressed}
          />
          <Button
            buttonTitle="Send"
            customClasses={[cls.root__sendButton]}
            onClick={sendValidatedMessage}
            disabled={!isComposeAvailable}
            isLoading={!isComposeAvailable}
          />
        </label>
      </div>
    </div>
  )
}

export default ChatCompose;
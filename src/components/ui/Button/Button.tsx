import cls from "./Button.module.scss";
import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "../../../helpers";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  isLoading?: false,
  buttonTitle?: string,
  customClasses?: string[],
}

const Button: FC<IButton>= ({children, buttonTitle, customClasses, ...props}) => {

  const extraClasses = customClasses?.length ? classNames([cls.root, ...customClasses]) : cls.root

  return (
    <button className={extraClasses} {...props}>
      <div className={cls.root__inner}>
        {children ?? <span className={cls.root__title}>{buttonTitle}</span>}
      </div>
    </button>
  )
}

export default Button;
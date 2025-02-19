import cls from "./Button.module.scss";
import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "../../../helpers";
import LoaderSimple from "../LoaderSimple/LoaderSimple";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  isLoading?: boolean,
  buttonTitle?: string,
  customClasses?: string[],
}

const Button: FC<IButton>= ({
                              children,
                              buttonTitle,
                              customClasses,
                              isLoading = false,
                              ...props
}) => {

  const extraClasses = customClasses?.length ? classNames([cls.root, ...customClasses]) : cls.root

  return (
    <button className={extraClasses} {...props}>
      <div className={cls.root__inner}>
        {
          isLoading &&
            <div className={cls.root__loader}>
                <LoaderSimple />
            </div>}
        {!isLoading && (children ?? <span className={cls.root__title}>{buttonTitle}</span>)}
      </div>
    </button>
  )
}

export default Button;
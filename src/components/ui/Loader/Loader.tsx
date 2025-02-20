import {FC} from "react";
import cls from "./Loader.module.scss";
import { classNames } from "@/helpers";

interface ILoader {
  extraClasses?: string[];
  message?: string;
}

const Loader: FC<ILoader> = (props) => {

  const {
    extraClasses = [],
    message = '',
  } = props

  const loaderClasses = classNames([cls.root, ...extraClasses])

  return (
    <div className={loaderClasses}>
      <div className={cls.root__inner}>
        <div className={cls.root__decor}></div>
        {
          message && <div className={cls.root__message}>{message}</div>
        }
      </div>
    </div>
  )
}

export default Loader;
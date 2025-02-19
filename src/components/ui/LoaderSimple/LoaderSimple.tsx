import {FC} from "react";
import cls from "./LoaderSimple.module.scss";
import { classNames } from "@/helpers";

interface ILoaderSimple {
  extraClasses?: string[];
}

const LoaderSimple: FC<ILoaderSimple> = (props) => {

  const {
    extraClasses = [],
  } = props

  const loaderClasses = classNames([cls.root, ...extraClasses])

  return (
    <div className={loaderClasses}>
      <div className={cls.root__inner}>
        <div className={cls.root__decor}></div>
      </div>
    </div>
  )
}

export default LoaderSimple;
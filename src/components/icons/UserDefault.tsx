import {FC} from "react";
import {Icon} from "@/types/Icon";
import {DEFAULT_ICONS_SETTINGS} from "@/constants/main";

const UserDefault: FC<Icon> = (props) => {

  const {
    width = DEFAULT_ICONS_SETTINGS.width,
    height = DEFAULT_ICONS_SETTINGS.height,
    color = DEFAULT_ICONS_SETTINGS.color,
  } = props

  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path fill={color} d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"
            opacity="0.5"/>
      <path fill={color}
            d="M16.807 19.011A8.46 8.46 0 0 1 12 20.5a8.46 8.46 0 0 1-4.807-1.489c-.604-.415-.862-1.205-.51-1.848C7.41 15.83 8.91 15 12 15s4.59.83 5.318 2.163c.35.643.093 1.433-.511 1.848M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/>
    </svg>
  )
}

export default UserDefault;
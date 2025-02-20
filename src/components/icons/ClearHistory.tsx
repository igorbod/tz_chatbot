import {FC} from "react";
import {Icon} from "@/types/Icon";
import {DEFAULT_ICONS_SETTINGS} from "@/constants/main";

const ClearHistory: FC<Icon> = (props) => {

  const {
    width = DEFAULT_ICONS_SETTINGS.width,
    height = DEFAULT_ICONS_SETTINGS.height,
    color = DEFAULT_ICONS_SETTINGS.color,
  } = props

  return (
    <svg width={width} height={height} viewBox="0 0 1200 1200">
      <path fill={color}
            d="M1093.636 0L683.919 409.716c-29.44-16.92-67.651-12.834-92.811 12.325c-21.045 21.044-27.335 51.226-18.931 77.763c-57.811-29.551-124.29-34.53-191.204-5.992C255.457 556.096 168.858 685.687 0 700.744c12.889 26.536 29.579 56.126 50.049 88.726c71.005 11.18 140.925-11.4 195.559-67.14c-21.221 66.046-73.074 115.338-143.2 141.02c18.195 24.261 39.007 49.729 62.509 76.265c80.851-27.028 109.762-64.018 34.115 36.294c31.904 33.138 66.075 68.279 108.064 97.849c18.654-68.878 68.927-121.768 140.953-148.987c-55.188 51.727-77.289 126.649-63.667 206.934c41.698 28.051 79.998 50.86 114.873 68.297c29.705-127.434 116.39-259.614 206.935-380.972c29.215-61.498 24.481-127.952-6.605-191.407c26.685 8.697 57.168 2.481 78.375-18.726c25.159-25.159 29.244-63.37 12.324-92.811L1200 106.37L1093.639.008z"/>
    </svg>
  )
}

export default ClearHistory;
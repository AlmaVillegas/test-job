import { FaBars as MenuIcon } from "react-icons/fa"
type PropsNameIcon = "MenuIcon"

type PropsLibraryIcons = {
  name?: PropsNameIcon 
  size?: string | number 
  className?: string 
  style?: React.CSSProperties 
} 

export const IconsLibrary = ({
  name = "MenuIcon",
  ...props
}: PropsLibraryIcons) => {
  const Icons = {
    MenuIcon: <MenuIcon {...props} />,
  } 
  return Icons[name] || <MenuIcon {...props} /> 
} 

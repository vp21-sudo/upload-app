
import { FC } from "react"

interface LabelComponent {
    className?: String,
    children: React.ReactNode
}
const Label: FC<LabelComponent> = ({className, ...props}) => {
  return (
    <label className={" text-2xl px-1 font-semibold " + className}>{props.children}</label>
  )
}

export default Label
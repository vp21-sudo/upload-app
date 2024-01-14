import { FC } from 'react'

interface InputGroupProps {
    className?:String
    children: React.ReactNode
}
const InputGroup:FC<InputGroupProps> = ({className, children}) => {
  return (
    <div className={' my-4 ' + className}>{children}</div>
  )
}

export default InputGroup
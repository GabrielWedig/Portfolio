import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './style'

type ButtonTypes = 'transparent' | 'primary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  btnType?: ButtonTypes
  isActive?: boolean
}

const buttons = {
  transparent: S.TransparentBtn,
  primary: S.PrimaryBtn
}

export const Button = ({
  children,
  isActive = false,
  btnType = 'primary',
  ...rest
}: ButtonProps) => {
  const Component = buttons[btnType]
  return (
    <Component $isActive={isActive} {...rest}>
      {children}
    </Component>
  )
}

import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './style'

type ButtonTypes = 'transparent'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  buttonType?: ButtonTypes
}

const buttons = {
  transparent: S.TransparentBtn
}

export const Button = ({
  children,
  buttonType = 'transparent',
  ...rest
}: ButtonProps) => {
  const Component = buttons[buttonType]
  return <Component {...rest}>{children}</Component>
}

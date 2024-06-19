import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './style'

type ButtonTypes = 'transparent' | 'primary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  buttonType?: ButtonTypes
}

const buttons = {
  transparent: S.TransparentBtn,
  primary: S.PrimaryBtn
}

export const Button = ({
  children,
  buttonType = 'primary',
  ...rest
}: ButtonProps) => {
  const Component = buttons[buttonType]
  return <Component {...rest}>{children}</Component>
}

import * as S from './styles'

export type buttonProps = {
  children?: React.ReactNode
  size?: 'large' | 'medium' | 'small'
  fullWidth?: boolean
  icon?: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  size = 'medium',
  fullWidth,
  icon,
  ...props
}: buttonProps) => (
  <S.Wrapper hasIcon={!!icon} size={size} {...props} fullWidth={fullWidth}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button

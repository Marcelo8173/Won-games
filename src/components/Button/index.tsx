import * as S from './styles'

export type buttonProps = {
  children?: React.ReactNode
  size?: 'large' | 'medium' | 'small'
  fullWidth?: boolean
}

const Button = ({ children, size = 'medium', fullWidth }: buttonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button

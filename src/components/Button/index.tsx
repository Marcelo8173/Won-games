import * as S from './styles'

export type buttonProps = {
  children?: React.ReactNode
  size?: 'large' | 'medium' | 'small'
}

const Button = ({ children, size = 'medium' }: buttonProps) => (
  <S.Wrapper size={size}>{!!children && <span>{children}</span>}</S.Wrapper>
)

export default Button
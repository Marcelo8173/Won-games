import * as S from './styles'

export type HeadingProps = {
  children?: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBotton?: boolean
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBotton = false
}: HeadingProps) => (
  <S.Wrapper lineBotton={lineBotton} lineLeft={lineLeft} color={color}>
    {children}
  </S.Wrapper>
)

export default Heading

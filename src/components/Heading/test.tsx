import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpes'
import 'jest-styled-components'
import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading white by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render the heading black color', () => {
    renderWithTheme(<Heading color={'black'}>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render the line left', () => {
    renderWithTheme(<Heading lineLeft={true}>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render the line bottom', () => {
    renderWithTheme(<Heading lineBotton={true}>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})

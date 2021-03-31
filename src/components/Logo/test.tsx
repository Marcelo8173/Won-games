import { screen } from '@testing-library/react'
import 'jest-styled-components'
import Logo from '.'
import { renderWithTheme } from 'utils/test/helpes'

describe('<Logo />', () => {
  it('it should the render white label by default', () => {
    //renderizar o componente `render`
    //selecionar o elemento a ser testado `screen (queries)`
    //expect - assertion - asserção - comparação
    renderWithTheme(<Logo />)
    //metodo screen faz querie que pega a label text won games - .parentElement seleciona o elemento pai
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('it should the render black label by default', () => {
    //renderizar o componente `render`
    //selecionar o elemento a ser testado `screen (queries)`
    //expect - assertion - asserção - comparação
    renderWithTheme(<Logo color="black" />)
    //metodo screen faz querie que pega a label text won games - .parentElement seleciona o elemento pai
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('it should be render a big logo', () => {
    //renderizar o componente `render`
    //selecionar o elemento a ser testado `screen (queries)`
    //expect - assertion - asserção - comparação
    renderWithTheme(<Logo size="large" />)
    //metodo screen faz querie que pega a label text won games - .parentElement seleciona o elemento pai
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('it should be render a normal logo', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('it should be render a bigger logo without text if hidenOnMobile', () => {
    renderWithTheme(<Logo hiddenOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})

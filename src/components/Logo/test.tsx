import { screen } from '@testing-library/react'

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
})

import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpes'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)
    //selecionar o menu
    const fullMenuElemento = screen.getByRole('navigation', { hidden: true })
    //verificar se o menu esta escondido
    expect(fullMenuElemento.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElemento).toHaveStyle({ opacity: 0 })
    //clicar de abrir o menu e verificar se abriu
    fireEvent.click(screen.getByLabelText(/open menu/i)) //click
    expect(fullMenuElemento.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElemento).toHaveStyle({ opacity: 1 })
    //clicar me fechar e verificar se ele fechou

    fireEvent.click(screen.getByLabelText(/close menu/i)) //click
    expect(fullMenuElemento.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElemento).toHaveStyle({ opacity: 0 })
  })
})

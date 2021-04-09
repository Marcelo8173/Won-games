import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpes'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should be render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should not be render with label', () => {
    renderWithTheme(<Checkbox labelFor="check" />)

    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument()
    // expect(screen.getByLabelText(/checkbox label/i)).not.toBeInTheDocument()
  })

  it('should be render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelColor="black" labelFor="check" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })
})

import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helpes'
import Checkbox from '.'
import userEvent from '@testing-library/user-event'

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

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label="check" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label="check" onCheck={onCheck} isChecked />)

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('Should be acessive with lab', () => {
    renderWithTheme(<Checkbox label="check" labelFor="check" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/check/i)).toHaveFocus()
  })
})

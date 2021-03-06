import styled, { css, DefaultTheme } from 'styled-components'
import { buttonProps } from '.'

type wrapperProps = { hasIcon: boolean } & Pick<
  buttonProps,
  'size' | 'fullWidth'
>

const wrapperButtonModifiers = {
  small: (theme: DefaultTheme) => css`
    /* height: 3rem; */
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<wrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};
    cursor: pointer;
    ${!!size && wrapperButtonModifiers[size](theme)};
    ${!!fullWidth && wrapperButtonModifiers.fullWidth()};
    ${!!hasIcon && wrapperButtonModifiers.withIcon(theme)}
  `}
`

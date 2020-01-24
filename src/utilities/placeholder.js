export const placeholder = fontColor => `
  &:not(:disabled):-moz-placeholder {
    color: ${fontColor};
    transition: all 0.250s;
  }

  &:not(:disabled)::-moz-placeholder {
    color: ${fontColor};
    transition: all 0.250s;
  }

  &:not(:disabled):-ms-input-placeholder {
    color: ${fontColor};
    transition: all 0.250s;
  }

  &:not(:disabled)::-webkit-input-placeholder {
    color: ${fontColor};
    transition: all 0.250s;
  }

  &:not(:disabled):hover:-moz-placeholder,
  &:not(:disabled):focus:-moz-placeholder {
    color: ${fontColor};
  }

  &:not(:disabled):hover::-moz-placeholder,
  &:not(:disabled):focus::-moz-placeholder {
    color: ${fontColor};
  }

  &:not(:disabled):hover:-ms-input-placeholder,
  &:not(:disabled):focus:-ms-input-placeholder {
    color: ${fontColor};
  }

  &:not(:disabled):hover::-webkit-input-placeholder,
  &:not(:disabled):focus::-webkit-input-placeholder {
    color: ${fontColor};
  }
`

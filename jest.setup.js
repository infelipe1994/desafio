import '@testing-library/jest-dom/extend-expect'

jest.mock('next/router', () => ({
  useRouter: () => ({
    back: jest.fn()
  })
}))

window.HTMLElement.prototype.scrollIntoView = jest.fn()

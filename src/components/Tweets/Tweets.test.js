import { render, screen } from '@testing-library/react'
import Tweets from './Tweets'

describe('Tweets component', () => {
  test('renders header', () => {
    render(<Tweets />)

    const header = screen.getByText(/saved trash tweets/i)
    expect(header).toBeInTheDocument()
  })

  describe('renders list of tweets', () => {
    test('renders tweet content', () => {
      render(<Tweets />)

      const content = screen.getByText(/no trash pick-up today/i)
      expect(content).toBeInTheDocument()
    })

    test('renders timestamp', () => {
      render(<Tweets />)

      const timestamp = screen.getByText(/february 26, 2002/i)
      expect(timestamp).toBeInTheDocument()
    })
  })
})
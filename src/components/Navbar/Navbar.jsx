import { Link } from 'react-router-dom'
import Tweets from '../Tweets/Tweets'

export default function Navbar() {
  return(
    <>
      <header data-testid="header">
        <nav>
          <Link to="/tweets" element={<Tweets/>} >Tweets</Link>
          <Link to="/emails" element={<Tweets/>} >Emails</Link>
        </nav>
      </header>
    </>
  )
}
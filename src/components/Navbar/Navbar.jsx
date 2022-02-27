import { Link } from 'react-router-dom'
import Tweets from '../Tweets'
import Emails from '../Emails'

export default function Navbar() {
  return(
    <>
      <header data-testid="header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets" element={<Tweets/>} >Tweets</Link>
          <Link to="/emails" element={<Emails/>} >Emails</Link>
        </nav>
      </header>
    </>
  )
}
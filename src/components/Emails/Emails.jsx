import { useState } from "react"

const emails = [
  "dan@example.com",
  "dude@example.com",
  "lily@example.com"
]

function EmailList({emails}) {
  return(
    <ul>
      {emails.map(email => <Email key={email}  email={email}/>)}
    </ul>
  )
}

function Email({email}) {
  return(
    <li>{email}</li>
  )
}

function AddEmailForm() {
  const [email, setEmail] = useState("")

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`email ${email} added`)
    setEmail('')
  }

  return(
    <form>
      <label htmlFor="">Email: </label>
      <input type="email" value={email} onChange={handleChange} required />
      <button onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default function Emails() {
  return(
    <>
      <h1>Email Subscribers</h1>
      <EmailList emails={emails} />
      <AddEmailForm />
    </>
  )
}
import React from 'react'

const COLUMNS = ["ID", "Timestamp", "Content"]

let tweets = [
  {
    id: 1,
    timestamp: "February 26, 2022",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
  },
  {
    id: 2,
    timestamp: "January 26, 2022",
    content: "No trash today in celebration of Dan's birthday"
  },
  {
    id: 3,
    timestamp: "July 19, 2022",
    content: "No trash today in celebration of Danny's birthday"
  },
]

function TableHeader({ columns }) {
  return(
  <tr>
    {columns.map(column => <th>{column}</th>)}
  </tr>
  )
}

function TableRows({ tweets }) {
  return(
    tweets.map(tweet => {
      return(
        <tr>
          <td>{tweet.id}</td>
          <td>{tweet.timestamp}</td>
          <td>{tweet.content}</td>
        </tr>
      )
    })
  )
}

function TweetTable({ tweets }) {
  return(
    <table>
      <TableHeader columns={COLUMNS} />
      <TableRows tweets={tweets} />
    </table>
  )
}

export default function Tweets() {
  return(
    <>
      <h1>Saved Trash Tweets</h1>
      <TweetTable tweets={tweets} />
    </>
  )
}
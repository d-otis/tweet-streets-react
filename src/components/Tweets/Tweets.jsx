import { Table, TableData } from './Tweets.styles'

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
    content: "No trash pick-up today in celebration of Dan's birthday"
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
      {columns.map(column => <th key={column.id} >{column}</th>)}
    </tr>
  )
}

function TableRows({ tweets }) {
  return(
    tweets.map(tweet => {
      return(
        <tr key={tweet.id}>
          <TableData>{tweet.id}</TableData>
          <TableData>{tweet.timestamp}</TableData>
          <TableData>{tweet.content}</TableData>
        </tr>
      )
    })
  )
}

function TweetTable({ tweets }) {
  return(
    <Table>
      <tbody>
        <TableHeader columns={COLUMNS} />
        <TableRows tweets={tweets} />
      </tbody>
    </Table>
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
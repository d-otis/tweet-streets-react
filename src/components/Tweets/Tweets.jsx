import { useQuery } from 'react-query'
import PropTypes from 'prop-types'
import { TableData } from './Tweets.styles'

const COLUMNS = ["ID", "Timestamp", "Content"]

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
    <table>
      <tbody>
        <TableHeader columns={COLUMNS} />
        <TableRows tweets={tweets} />
      </tbody>
    </table>
  )
}

export default function Tweets() {
  const tweetQuery = useQuery('tweets', async () => {
    const response = await window.fetch("/api/tweets")
    if (!response.ok) {
      throw new Error(await response.text())
    }
    const data = await response.json()
    return data.data
  })

  if (tweetQuery.isLoading) {
    return <h1>Loading</h1>
  }

  if (tweetQuery.data) {
    const tweets = tweetQuery.data
    return(
      <>
        <h1>Saved Trash Tweets</h1>
        <TweetTable tweets={tweets} />
      </>
    )
  }

  return null
}
TweetTable.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object)
}
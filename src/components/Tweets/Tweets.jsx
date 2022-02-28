import { useQuery } from 'react-query'
import { fetchTweets } from '../../queries/tweetQueries'
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
  // TODO pull this out into a separate file
  const tweetQuery = useQuery('tweets', fetchTweets)

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
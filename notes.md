# Features

- view all saved tweets
- add email addresses
- remove email addresses

# Views

- Index - Saved Tweets
- New - Email Address

# Dev Plan

- [ ] create routes/views with hard-coded data
  - [ ] /tweets
    - [x] config route
    - [ ] `[ { id, timestamp, content } ]`
    - [ ] setup styled-components for table styling
  - [ ] /emails
    - [ ] config route
    - [ ] `[ { email } ]`
- [ ] set up MSW to retrieve mock data for views
- [ ] connect to Google Sheets database

# Features

- view all saved tweets
- add email addresses
- remove email addresses

# Views

- Index - Saved Tweets
- New - Email Address

# Dev Plan

- [ ] Navbar
  - [ ] Home
  - [ ] Tweets
  - [ ] Emails
- [ ] update Readme to make sense
- [ ] create routes/views with hard-coded data
  - [ ] `/tweets`
    - [x] config route
    - [ ] `[ { id, timestamp, content } ]`
    - [ ] setup styled-components for table styling
    - [ ] make sure these tests have access to the URL in test env
  - [ ] `/emails`
    - [ ] config route
    - [ ] `[ { email } ]`
    - [ ] add `POST` functionality for adding email addresses
- [ ] set up MSW to retrieve mock data for views
- [ ] connect to Google Sheets database

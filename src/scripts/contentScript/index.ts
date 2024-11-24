console.info('Content script is running')

import {getGitHubUsername, saveUsernameToStorage} from './username'
const username = getGitHubUsername()

if (username) {
  saveUsernameToStorage(username)
} else {
  console.error('GitHub username could not be extracted.')
}

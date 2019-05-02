const defaultURL = 'https://next.json-generator.com/api/json/get/41P1_UhSI'

export async function fetchFriends(friendsURL = defaultURL) {
  // fetch all friends' data from remote URL
  return axios.get(friendsURL)
}

export async function getFriend(id) {
  // FIXME: usually for an application, this method is provided from
  // backend API to get the details
}
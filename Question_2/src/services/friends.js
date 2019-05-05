import axios from 'axios';

const friendsURL = process.env.VUE_APP_ROOT_API;

export async function fetchFriends() {  
  // fetch all friends' data from remote URL
  const { localStorage } = window;
  const { data } = await axios.get(friendsURL);
  // cache data into local storage
  if (!localStorage.getItem('friendsData')) {
    localStorage.setItem('friendsData', JSON.stringify(data));
  }

  return data.map(item => ({
    id: item._id,
    avatar: item.picture,
    name: `${item.name.first} ${item.name.last}`,
  }));
}

export async function getFriendByID(id) {
  // FIXME: usually for an application, this method is provided from
  // backend API to get the details. So here we use caches in localStorage
  // to mimic this behaviour.
  if (!localStorage.getItem('friendsData')) {
    // load all data
    await fetchFriends();
  }

  // find ID from localStorage
  const cache = localStorage.getItem('friendsData');
  const friendsArray = JSON.parse(cache);

  const found = friendsArray.find(elem => elem._id === id);
  return found ? {
    id: found._id,
    avatar: found.picture,
    name: `${found.name.first} ${found.name.last}`,
    email: found.email,
    location: [found.location.longitude, found.location.latitude],
  } : null;
}

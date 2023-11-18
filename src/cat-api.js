// import axios
import axios from 'axios';

// add key to headers
axios.defaults.headers.common['x-api-key'] =
  'live_SpY3U6UyCgy2bjzR7DbU0oLAhvNCZywFRPbwHdfvxbdcdP5NnP0R6vdYHdS1yx2N';

//
async function fetchBreeds() {
  const URL_BREEDS = 'https://api.thecatapi.com/v1/breeds';

  return await axios.get(URL_BREEDS).then(resp => {
    if (!resp.data) {
      throw new Error();
    }
    return resp.data;
  });
}

async function fetchCatByBreed(breedId) {
  const URL_IMAGES = 'https://api.thecatapi.com/v1/images';
  const SEARCH_BREED_ID = 'search?breed_ids';

  return await axios
    .get(`${URL_IMAGES}/${SEARCH_BREED_ID}=${breedId}`)
    .then(resp => {
      if (!resp.data) {
        throw new Error();
      }
      return resp.data;
    });
}

//
export { fetchBreeds, fetchCatByBreed };

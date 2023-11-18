//
import { fetchBreeds, fetchCatByBreed } from './cat-api';

//

fetchBreeds()
  .then(data => console.log(data))
  .catch(err => console.log(err));

fetchCatByBreed('aege')
  .then(data => console.log(data))
  .catch(err => console.log(err));

//

// import functions that get data from api
import { fetchBreeds, fetchCatByBreed } from './cat-api';

// get elements
const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

refs.error.style.visibility = 'hidden';

// add event listener
refs.select.addEventListener('change', handlerSelect);

// on change event render api data about the cat's breed choosen from selected options
function handlerSelect(e) {
  e.preventDefault();
  refs.catInfo.innerHTML = '';

  fetchCatByBreed(e.currentTarget.value).then(data => {
    if (!data) {
      // show text about error
      refs.error.style.visibility = 'visible';
      throw new Error();
    }
    // render the cat info
    refs.catInfo.insertAdjacentHTML('beforeend', createMarkupBreedInfo(data));
  });

  console.log(e.target.value);
}

// add options (with cat names from api) to select
fetchBreeds()
  .then(data => {
    refs.select.insertAdjacentHTML('beforeend', createMarkupOptions(data));
  })
  .catch(err => console.log(err));

// fill select options
function createMarkupOptions(data) {
  return data
    .map(item => `<option value=${item.id}>${item.name}</option>`)
    .join('');
}

//  create info about the breed
function createMarkupBreedInfo(data) {
  const { url } = data[0];
  const { description, name, temperament } = data[0].breeds[0];
  //

  return `<h2>${name}</h2>
    <img src="${url}" alt="${name}" width="300" />    
    <p>${description}</p>
    <h3>Temperament: ${temperament}</h3> `;
}

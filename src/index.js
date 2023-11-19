// import functions that get data from api
import { fetchBreeds, fetchCatByBreed } from './cat-api';

// get elements
const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

// state
let isLoading = true;
//   hide error message
refs.error.classList.add('hide');
// hide select
refs.select.classList.add('hide');

// add event listener
refs.select.addEventListener('change', handlerSelect);

// on change event render api data about the cat's breed choosen from selected options
function handlerSelect(e) {
  //   e.preventDefault();
  // show loader message
  isLoading && loaderHandler();
  // clear cat info
  refs.catInfo.innerHTML = '';

  fetchCatByBreed(e.currentTarget.value).then(data => {
    // // show loader message
    // show loader message
    isLoading && loaderHandler();

    if (!data) {
      //   hide loader message
      isLoading = false;
      // show text about error
      errorHandler();
      throw new Error();
    }

    //   hide loader message
    hideLoaderErrorShowBreedInfo();
    // render the cat info
    refs.catInfo.insertAdjacentHTML('beforeend', createMarkupBreedInfo(data));
  });

  console.log(e.target.value);
}

// add options (with cat names from api) to select
fetchBreeds()
  .then(data => {
    isLoading = true;
    loaderHandler();
    if (!data) {
      isLoading = false;
      errorHandler();
    }
    // hide loader message
    hideLoaderErrorShowBreedInfo();
    //   add breeds options to select
    refs.select.insertAdjacentHTML('beforeend', createMarkupOptions(data));
    // // show select
    // refs.select.classList.remove('hide');
  })
  .catch(err => {
    console.log(err);
    errorHandler();
  });

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
    <img src="${url}" alt="${name}"   loading="lazy"/>    
    <p class="description">${description}</p>
    <h3>Temperament: ${temperament}</h3> `;
}

// when loading
function loaderHandler() {
  // hide select
  refs.select.classList.add('hide');
  // hide catInfo
  refs.catInfo.classList.add('hide');
  // show loader message
  refs.loader.classList.remove('hide');
}

// when error
function errorHandler() {
  // hide loader message
  refs.loader.classList.add('hide');
  // show error message
  refs.error.classList.remove('hide');
}

// when get info from api
function hideLoaderErrorShowBreedInfo() {
  // hide loader message
  refs.loader.classList.add('hide');
  //   hide error message
  refs.error.classList.add('hide');
  // show select and catInfo
  refs.catInfo.classList.remove('hide');
  refs.select.classList.remove('hide');
}

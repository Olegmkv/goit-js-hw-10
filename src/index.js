import { TheCatAPI } from './js/TheCatAPI'

const api = new TheCatAPI();

const refs = {
    select: document.querySelector(".breed-select"),
    loader: document.querySelector(".loader"),
    error: document.querySelector(".error"),
    catInfo: document.querySelector(".cat-info"),
    catImage: document.querySelector(".cat-img-js"),
};

refs.error.classList.add('is-hidden');

// формуємо розмітку задля обрання породи в чекбоксі
api.getCatBreeds().then((breeds) => {
    startLoad();
    const markup = breeds.map(({ id, name }) => { return `<option value="${id}">${name}</option>` }).join("");
    refs.select.insertAdjacentHTML('beforeend', markup);
    endLoad()
}).catch(()=>errorLoad());

refs.select.addEventListener('change', onChangeSelect);

// для обраної породи виводимо описову інформацію та фото
function onChangeSelect(evt) {
    startLoad()
    const selectedBreed = evt.currentTarget.value;
    api.getCatInfo(selectedBreed).then((breed) => {
        const { url } = breed[0];
        const { name, description, temperament } = breed[0].breeds[0];
        
        const markup = `<img src="${url}" class="cat-img-js" alt="${name}" />
        <div class="cat-div-js">
        <h2 class="cat-head-js">${name}</h2>
        <p class="cat-text-js">${description}</p>
        <p class="cat-text-js"><span>Temperament: </span>${temperament}</p>
        </div>`;
        refs.catInfo.innerHTML = markup;
        endLoad();
    }).catch(()=>errorLoad()); 
};

// початок завантаження
function startLoad() {
    refs.error.classList.add('is-hidden')
    refs.catInfo.classList.add('is-hidden');
    refs.loader.classList.remove('is-hidden');
};

// успішне завершення завантаження
function endLoad() {
    refs.error.classList.add('is-hidden');
    refs.catInfo.classList.remove('is-hidden');
    refs.loader.classList.add('is-hidden');
};

// помилка завантаження даних
function errorLoad() {
    refs.loader.classList.add('is-hidden');
    refs.error.classList.remove('is-hidden');
}

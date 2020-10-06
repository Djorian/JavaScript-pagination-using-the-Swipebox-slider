// После события загрузки всего DOMa, выполнить функцию
document.addEventListener("DOMContentLoaded", () => {
    // Повесить событие клика на элементы
    document.querySelector('#one-page').addEventListener('click', () => {
        showPhotos(12);
    });

    document.querySelector('#two-page').addEventListener('click', () => {
        showPhotos(24);
    });

    document.querySelector('#three-page').addEventListener('click', () => {
        showPhotos(36);
    });

    document.querySelector('#previous-page').addEventListener('click', () => {
        showPhotos(imagesCounter - 12);
    });

    document.querySelector('#next-page').addEventListener('click', () => {
        showPhotos(imagesCounter + 12);
    });

    // Запустить функцию отображения фотографий
    showPhotos(imagesCounter);
});

// Объект содержащий номера и названии фотографий
const object = {
    1: 'Фотография №1', 2: 'Фотография №2', 3: 'Фотография №3', 4: 'Фотография №4', 5: 'Фотография №5', 6: 'Фотография №6', 7: 'Фотография №7', 8: 'Фотография №8', 9: 'Фотография №9', 10: 'Фотография №10', 11: 'Фотография №11', 12: 'Фотография №12', 13: 'Фотография №13', 14: 'Фотография №14', 15: 'Фотография №15', 16: 'Фотография №16', 17: 'Фотография №17', 18: 'Фотография №18', 19: 'Фотография №19', 20: 'Фотография №20', 21: 'Фотография №21', 22: 'Фотография №22', 23: 'Фотография №23', 24: 'Фотография №24', 25: 'Фотография №25', 26: 'Фотография №26', 27: 'Фотография №27', 28: 'Фотография №28', 29: 'Фотография №29', 30: 'Фотография №30', 31: 'Фотография №31', 32: 'Фотография №32', 33: 'Фотография №33', 34: 'Фотография №34', 35: 'Фотография №35', 36: 'Фотография №36'
};

// Кнопки для пагинации
const onePage = document.querySelector('#one-page');
const twoPage = document.querySelector('#two-page');
const threePage = document.querySelector('#three-page');
const previousPage = document.querySelector('#previous-page');
const nextPage = document.querySelector('#next-page');

// Счетчик количества выводимых на страницу фотографий
let imagesCounter = 12;

// Блок для вывода фотографий
let imagesBlock = document.querySelector('#images-block');

// Функция для вывода фотографий на страницу
const showPhotos = (value) => {

    imagesCounter = value;

    imagesBlock.innerHTML = ``;

    for (const key in object) {
        if (key > (imagesCounter - 12) && key <= imagesCounter) {
            imagesBlock.innerHTML += `<figure class="col-lg-3 mt-4"><a href="images/${key}.jpg" class="swipebox" title="${object[key]}"><img src="images/${key}.jpg" class="img-fluid rounded img-thumbnail"></a><figcaption class="text-center mt-2">${object[key]}</figcaption></figure>`;
        }
    }

    // Проверка для скрытия/отображения кнопок пагинации
    switch (imagesCounter) {
        case 12:
            onePage.classList.add("active");
            twoPage.classList.remove("active");
            threePage.classList.remove("active");
            previousPage.style.display = 'none';
            nextPage.style.display = 'block';
            break;
        case 24:
            onePage.classList.remove("active");
            twoPage.classList.add("active");
            threePage.classList.remove("active");
            previousPage.style.display = 'block';
            nextPage.style.display = 'block';
            break;
        case 36:
            onePage.classList.remove("active");
            twoPage.classList.remove("active");
            threePage.classList.add("active");
            previousPage.style.display = 'block';
            nextPage.style.display = 'none';
            break;
    }
};
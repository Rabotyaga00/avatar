const usernameInput = document.getElementById('username');
const usernameContainer = document.querySelector('.username-container');

// Add an event listener to the input field
usernameInput.addEventListener('input', function() {
    // Update the username container with the value typed into the input
    usernameContainer.textContent = usernameInput.value || 'Имя';
});

// Получаем ссылку на элементы
//const hatSelect = document.getElementById('hat-select');
//const hatImg = document.getElementById('hat-img');

// Функция для обновления изображения шляпы
//function updateHatImage() {
    // Получаем номер шляпы
//    const hatNumber = hatSelect.value;

    // Проверяем, что введенное число в пределах от 1 до 7
 //   if (hatNumber >= 1 && hatNumber <= 7) {
        // Обновляем путь к изображению шляпы
      //  hatImg.src = `assets/hat-${hatNumber}.svg`;
      //  hatImg.classList.remove('hidden'); // Показываем шляпу
    //} else {
    //    hatImg.classList.add('hidden'); // Если число не в диапазоне, скрываем шляпу
    ///}
//}

// Добавляем обработчик события на изменение числа в поле ввода
//hatSelect.addEventListener('input', updateHatImage);

// Инициализируем отображение картинки при загрузке
//updateHatImage();



document.getElementById("frame-select").addEventListener("change", function() {
    const frame = document.querySelector(".frame");
    const selectedFrame = this.value;
    // Скидываем все классы рамки
    frame.classList.remove("line", "dash", "double");
    // Добавляем выбранную рамку
    if (selectedFrame !== "Нет") {
        frame.classList.add(selectedFrame.toLowerCase());
    }
});

document.getElementById("frame-picker").addEventListener("input", function() {
    const tshirt = document.querySelector(".frame");
    tshirt.style.backgroundColor = this.value;
});

document.getElementById("tshirt-picker").addEventListener("input", function() {
    const hatImg = document.getElementById("tshirt-img");
    const hatNumber = this.value; // Получаем выбранное число для шляпы

    // Проверяем, что выбранное значение находится в пределах от 1 до 7
    if (hatNumber >= 1 && hatNumber <= 7) {
        hatImg.src = `assets/hat-${hatNumber}.svg`; // Устанавливаем путь к изображению
        hatImg.classList.remove("hidden"); // Убираем класс hidden, чтобы шляпа появилась
    } else {
        hatImg.classList.add("hidden"); // Если значение вне диапазона, скрываем шляпу
    }
});


document.getElementById("tshirt-picker").addEventListener("input", function() {
    const tshirt = document.querySelector(".tshirt .tshirt-color");
    tshirt.style.fill = this.value;
});

document.getElementById("glasses-check").addEventListener("change", function() {
    const glasses = document.querySelector(".glasses");
    glasses.classList.toggle("hidden", !this.checked);
});

document.getElementById("hat-select").addEventListener("input", function() {
    const hatImg = document.getElementById("hat-img");
    const hatNumber = this.value; // Получаем выбранное число для шляпы

    // Проверяем, что выбранное значение находится в пределах от 1 до 7
    if (hatNumber >= 1 && hatNumber <= 7) {
        hatImg.src = `assets/hat-${hatNumber}.svg`; // Устанавливаем путь к изображению
        hatImg.classList.remove("hidden"); // Убираем класс hidden, чтобы шляпа появилась
    } else {
        hatImg.classList.add("hidden"); // Если значение вне диапазона, скрываем шляпу
    }
});

document.getElementById("earings-check").addEventListener("change", function() {
    const earings = document.querySelector(".earings");
    earings.classList.toggle("hidden", !this.checked);
});

document.getElementById("hair-range").addEventListener("input", function() {
    const hairImg = document.querySelector(".hair");
    const hairNumber = this.value; // Получаем значение прически с ползунка

    // Проверяем, что значение ползунка находится в пределах допустимого диапазона (например, от 0 до 7)
    if (hairNumber >= 0 && hairNumber <= 7) {
        hairImg.src = `assets/hair-${hairNumber}.svg`; // Устанавливаем путь к изображению прически
    }
});

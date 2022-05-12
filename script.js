const links = document.querySelectorAll('.navbar-list__item');

addEventListener('click', event => {
    if(event.target.classList.contains('navbar-list__item')){
        links.forEach(link => link.classList.remove('active__link'));
        !event.target.classList.contains('active__link') 
        ? event.target.classList.add('active__link') : null;
    }
});

document.querySelectorAll('.status').forEach(status => {
    if(status.textContent === "Годен") status.style.color = "green";
    if(status.textContent === "Не годен") status.style.color = "red";
    if(status.textContent === "Истекает") status.style.color = "orange";
})

let firstLinkPage = document.createElement('div');
let secondLinkPage = document.createElement('div');
let thirdLinkPage = document.createElement('div');
let mainPage = document.createElement('div');

mainPage.innerHTML = `
    <h2>О нас</h2>
    <p class="about__us">
        Данный сайт производственной компании ООО "Online Shop" предназначен для работников предприятия. Для гостей возможен просмотр вакансий. Работники могут контролировать срок годности продуктов и добавлять новые скоропортящиеся продукты. Для этого достаточно выбрать раздел продукции в навигационной панеле, затем появится таблицы с продуктами соответствующей категории. В этой таблице Вы и будете следить за продукцией. В этом будет помогать "статус", который есть у каждого продукта.
    </p>
    <h2>Вакансии</h2>
    <div class="vacancy">
        <ul class="vacancy__list">
            <li class="vacancy__item">Контролёр-кассир 4 разряда</li>
            <li class="vacancy__item">Грузчик</li>
            <li class="vacancy__item">Мёрчендайзер</li>
            <li class="vacancy__item">Контролёр-кассир 6 разряда</li>
        </ul>
        <ul class="vacancy__list">
            <li class="vacancy__item">Повар 3 разряда</li>
            <li class="vacancy__item">Уборщик внутреннего помещения</li>
            <li class="vacancy__item">Уборщик территории</li>
            <li class="vacancy__item">Охранник в магазин</li>
        </ul>
    </div>
`
firstLinkPage.innerHTML = `
    <h2>Таблица кисломолочных продуктов</h2>
    <ul class="table__header">
        <li class="table__arcticle">Артикул</li>
        <li class="table__name">Название</li>
        <li class="table__date">Дата производства</li>
        <li class="table__period">Срок годности</li>
        <li class="table__status">Статус</li>
    </ul>
    <div class="between"></div>
    <ul class="table">
        <li class="table__item">
            <p class="table__column">4183300</p>
            <p class="table__column">Кефир</p>
            <p class="table__column">30.04.2022</p>
            <p class="table__column">14 дней</p>
            <p class="table__column status">Истекает</p>
        </li>
        <li class="table__item">
            <p class="table__column">4816846</p>
            <p class="table__column">Йогурт</p>
            <p class="table__column">08.05.2022</p>
            <p class="table__column">28 дней</p>
            <p class="table__column status">Годен</p>
        </li>
        <li class="table__item">
            <p class="table__column">1816084</p>
            <p class="table__column">Молоко</p>
            <p class="table__column">28.04.2022</p>
            <p class="table__column">30 дней</p>
            <p class="table__column status">Годен</p>
        </li>
        <li class="table__item">
            <p class="table__column">8413807</p>
            <p class="table__column">Творог</p>
            <p class="table__column">25.04.2022</p>
            <p class="table__column">14 дней</p>
            <p class="table__column status">Не годен</p>
        </li>
        <li class="table__item">
            <p class="table__column">7182931</p>
            <p class="table__column">Сырок</p>
            <p class="table__column">05.05.2022</p>
            <p class="table__column">10 дней</p>
            <p class="table__column status">Годен</p>
        </li>
    </ul>
`

secondLinkPage.innerHTML = `
    <h2>Таблица хлебобулочных изделий</h2>
    <ul class="table__header">
        <li class="table__arcticle">Артикул</li>
        <li class="table__name">Название</li>
        <li class="table__date">Дата производства</li>
        <li class="table__period">Срок годности</li>
        <li class="table__status">Статус</li>
    </ul>
    <div class="between"></div>
    <ul class="table">
        <li class="table__item">
            <p class="table__column">3449841</p>
            <p class="table__column">Пончики</p>
            <p class="table__column">04.05.2022</p>
            <p class="table__column">5 дней</p>
            <p class="table__column status">Не годен</p>
        </li>
        <li class="table__item">
            <p class="table__column">6728871</p>
            <p class="table__column">Батон</p>
            <p class="table__column">13.05.2022</p>
            <p class="table__column">5 дней</p>
            <p class="table__column status">Годен</p>
        </li>
        <li class="table__item">
            <p class="table__column">8134892</p>
            <p class="table__column">Хлеб черный</p>
            <p class="table__column">10.05.2022</p>
            <p class="table__column">5 дней</p>
            <p class="table__column status">Истекает</p>
        </li>
        <li class="table__item">
            <p class="table__column">9045073</p>
            <p class="table__column">Круассан</p>
            <p class="table__column">05.05.2022</p>
            <p class="table__column">7 дней</p>
            <p class="table__column status">Не годен</p>
        </li>
        <li class="table__item">
            <p class="table__column">1052628</p>
            <p class="table__column">Лаваш</p>
            <p class="table__column">07.05.2022</p>
            <p class="table__column">10 дней</p>
            <p class="table__column status">Истекает</p>
        </li>
        <li class="table__item">
            <p class="table__column">2084684</p>
            <p class="table__column">Эклеры набор</p>
            <p class="table__column">12.05.2022</p>
            <p class="table__column">5 дней</p>
            <p class="table__column status">Годен</p>
        </li>
    </ul>
`

thirdLinkPage.innerHTML = `
<h2>Таблица плодоовощных продуктов</h2>
<ul class="table__header">
    <li class="table__arcticle">Артикул</li>
    <li class="table__name">Название</li>
    <li class="table__date">Дата производства</li>
    <li class="table__period">Срок годности</li>
    <li class="table__status">Статус</li>
</ul>
<div class="between"></div>
<ul class="table">
    <li class="table__item">
        <p class="table__column">5166808</p>
        <p class="table__column">Огурцы</p>
        <p class="table__column">10.05.2022</p>
        <p class="table__column">7 дней</p>
        <p class="table__column status">Истекает</p>
    </li>
    <li class="table__item">
        <p class="table__column">9621340</p>
        <p class="table__column">Перец болгарский</p>
        <p class="table__column">13.05.2022</p>
        <p class="table__column">5 дней</p>
        <p class="table__column status">Годен</p>
    </li>
    <li class="table__item">
        <p class="table__column">6210843</p>
        <p class="table__column">Помидоры</p>
        <p class="table__column">12.05.2022</p>
        <p class="table__column">7 дней</p>
        <p class="table__column status">Годен</p>
    </li>
    <li class="table__item">
        <p class="table__column">2301894</p>
        <p class="table__column">Капуста</p>
        <p class="table__column">08.05.2022</p>
        <p class="table__column">7 дней</p>
        <p class="table__column status">Не годен</p>
    </li>
</ul>
`
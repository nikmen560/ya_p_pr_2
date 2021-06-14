const name = document.getElementById('name');
const quantity = document.getElementById('quantity');
const price = document.getElementById('price');
let totalSum = 0;

function appendRow() {

    let row = document.createElement('tr');
    for(let i = 0; i < 4; i++) {

    }
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    td4.classList.add('summary');

    td1.appendChild(document.createTextNode(name.value));
    td2.appendChild(document.createTextNode(quantity.value));
    td3.appendChild(document.createTextNode(price.value));
    td4.appendChild(document.createTextNode(quantity.value * price.value));

    totalSum += quantity.value * price.value;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    return row;
}

const hoverOnTd = () => {
    document.querySelectorAll('.summary').forEach((item) => {
        item.addEventListener('mouseover', function () {
            this.style.background = 'green';
        });
        item.addEventListener('mouseout', function () {
            this.style.background = 'transparent';
        });
    });
}

document.getElementById('reset').onclick = function(event) {
    event.preventDefault();
    document.getElementById('result').innerHTML = '';
    totalSum = 0; // Сброс суммарной стоимости
};

document.getElementById('calc').onclick = function(event) {
    event.preventDefault(); // Остановка перехода по ссылке

    if (name.value != '' && quantity.value != '' && price.value != '') {
        if (document.getElementById('result').innerHTML === '') {
            totalSum = 0; // Сброс суммы

            let table = document.createElement('table');
            let caption = document.createElement('caption');
            let header = document.createElement('tr');

            let th1 = document.createElement('th');
            let th2 = document.createElement('th');
            let th3 = document.createElement('th');
            let th4 = document.createElement('th');

            caption.appendChild(document.createTextNode('Заказ'));

            th1.appendChild(document.createTextNode('Название'));
            th2.appendChild(document.createTextNode('Количество'));
            th3.appendChild(document.createTextNode('Стоимость 1 шт.'));
            th4.appendChild(document.createTextNode('всего, руб.'));

            header.appendChild(th1);
            header.appendChild(th2);
            header.appendChild(th3);
            header.appendChild(th4);

            table.appendChild(caption);
            table.appendChild(header);
            table.appendChild(appendRow());
            document.getElementById('result').appendChild(table);
        } else { // Если таблица существует
            document.querySelector('#result table').removeChild(document.getElementById('total'));
            // Удалить итогов строку
            document.querySelector('#result table').appendChild(appendRow());
        }

        let total = document.createElement('tr');
        let total1 = document.createElement('td');
        let total2 = document.createElement('td');

        total.setAttribute('id', 'total');
        total1.setAttribute('colspan', '3');
        total2.classList.add('summary');

        total1.appendChild(document.createTextNode('Сумма заказа:'));
        total2.appendChild(document.createTextNode(totalSum));

        total.appendChild(total1);
        total.appendChild(total2);
        document.querySelector('#result table').appendChild(total);
        hoverOnTd();
    } else
        alert('заполните поля');
};
import './scss/main.scss';
import sourceData from './data/data.json';

const data = sourceData.pokemon;
let table = document.getElementById('js-table-data'), row, cell1, cell2, cell3, cell4, cell5, cell6;

data.map((element) => {
    let types = "";
    let weaknesses = "";

    console.log(element);

    row = table.insertRow();
    cell1 = row.insertCell();
    cell2 = row.insertCell();
    cell3 = row.insertCell();
    cell4 = row.insertCell();
    cell5 = row.insertCell();
    cell6 = row.insertCell();

    element.type.map((element, index) => {
        if (index == 0) {
            types = types + element;
        } else {
            types = types + ", " + element;
        }
    })

    element.weaknesses.map((element, index) => {
        if (index == 0) {
            weaknesses = weaknesses + element;
        } else {
            weaknesses = weaknesses + ", " + element;
        }
    })

    cell1.innerHTML = element.num;
    cell2.innerHTML = element.name;
    cell3.innerHTML = types;
    cell4.innerHTML = weaknesses;
    cell5.innerHTML = element.height;
    cell6.innerHTML = element.weight;
})
import sourceData from '../../data/data.json';

const data = sourceData.pokemon;
let table = document.getElementById('js-table-data'), row, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9;

// Loop through data and build table rows
data.map((element) => {
    let types = "";
    let weaknesses = "";
    let prevEvolution = "";
    let nextEvolution = "";
    let image = "";

    // Create cells in each row
    row = table.insertRow();
    cell1 = row.insertCell();
    cell2 = row.insertCell();
    cell3 = row.insertCell();
    cell4 = row.insertCell();
    cell5 = row.insertCell();
    cell6 = row.insertCell();
    cell7 = row.insertCell();
    cell8 = row.insertCell();
    cell9 = row.insertCell();

    // Generate type string
    element.type.map((element, index) => {
        if (index == 0) {
            types = types + element;
        } else {
            types = types + ", " + element;
        }
    })

    // Generate weakness string
    element.weaknesses.map((element, index) => {
        if (index == 0) {
            weaknesses = weaknesses + element;
        } else {
            weaknesses = weaknesses + ", " + element;
        }
    })

    // Generate previous evolutions string
    if (element.prev_evolution) {
        element.prev_evolution.map((element, index) => {
            if (index == 0) {
                prevEvolution = prevEvolution + element.name;
            } else {
                prevEvolution = prevEvolution + ", " + element.name;
            }
        })
    } else {
        prevEvolution = "&mdash;"
    }

    // Generate future evolutions string
    if (element.next_evolution) {
        element.next_evolution.map((element, index) => {
            if (index == 0) {
                nextEvolution = nextEvolution + element.name;
            } else {
                nextEvolution = nextEvolution + ", " + element.name;
            }
        })
    } else {
        nextEvolution = "&mdash;"
    }

    // Generate image button
    if (element.img) {
        image = '<img src="' + element.img + '" class="mx-auto" />';
    }

    // Add data to cells
    cell1.innerHTML = image;
    cell1.classList.add('text-center');
    cell2.innerHTML = element.num;
    cell3.innerHTML = element.name;
    cell4.innerHTML = types;
    cell5.innerHTML = weaknesses;
    cell6.innerHTML = element.height;
    cell7.innerHTML = element.weight;
    cell8.innerHTML = prevEvolution;
    cell9.innerHTML = nextEvolution;
})
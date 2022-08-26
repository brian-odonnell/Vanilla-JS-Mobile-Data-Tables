const mdBreakpoint = '767.98px';

function mobileTables() {
    // Find all the data tables on the page
    let tables = document.getElementsByClassName('js-table');

    // If there are any tables on the page...
    if (tables.length) {

        // Loop through all the tables
        for (let i = 0; i < tables.length; i++) {
            let currentTable = tables[i];
            let tableHead = currentTable.getElementsByTagName('thead')[0];
            let headCells = tableHead.getElementsByTagName('th');
            let tableBody = currentTable.getElementsByTagName('tbody')[0];
            let bodyRows = tableBody.getElementsByTagName('tr');

            horizontalScroll(currentTable);
            
            // Loop through the rows of the table body
            for (let j = 0; j < bodyRows.length; j++) {
                let bodyCells = bodyRows[j].getElementsByTagName('td');
                
                // Loop through the cells of the row
                for (let t = 0; t < bodyCells.length; t++) {
                    let label;

                    // If the column label does not contain the class .no-mobile get the cell label by
                    // counting which column this cell is in, counting that far in to the table head columns,
                    // and getting the innerHTML
                    if (!headCells[t].classList.contains('no-mobile')) {
                        label = headCells[t].innerHTML;
                    // Otherwise set the label to "null"
                    } else {
                        label = "null";
                    }
                    
                    // If the viewport is less than or equal to the 767.98px...
                    if (window.matchMedia(`(max-width: ${mdBreakpoint})`).matches) {
                        addMobileLabels(t, bodyCells, label);
                    } else {
                        removeMobileLabel(t, bodyCells);
                    }
                }
            }
        }
    }
}

// Adds and removes a class that allows the table to scroll horizontally when the table is wider than it's container
function horizontalScroll(currentTable) {
    let tableContainer = currentTable.parentElement;
    let containerWidth = tableContainer.offsetWidth;
    let tableWidth = currentTable.offsetWidth;

    // If the table width is larger than the container width..
    if (tableWidth > containerWidth && !tableContainer.classList.contains('data-table--responsive')) {
        tableContainer.classList.add('data-table--responsive');
    // Otherwise if the table width is equal to or less than the container width...
    } else if (tableWidth <= containerWidth && tableContainer.classList.contains('data-table--responsive')) {
        tableContainer.classList.remove('data-table--responsive');
    }
}

// Adds column headers to cells for mobile
function addMobileLabels(t, bodyCells, label) {
    // If the cell does not already contain a span AND the label value does not equal "null"...
    if (!bodyCells[t].innerHTML.includes('span') && label != "null") {
        bodyCells[t].innerHTML = '<span>' + label + '</span>' + bodyCells[t].innerHTML;
    }
}

// Removes column headers from cells for screen sizes other than mobile
function removeMobileLabel(t, bodyCells) {
    // If the cell already contains a span...
    if (bodyCells[t].innerHTML.includes('span')) {
        bodyCells[t].removeChild(bodyCells[t].getElementsByTagName('span')[0]);
    }
}

// Run function on page load
setTimeout(function() {
    mobileTables();
}, 100)

// Run function on orientation change
window.addEventListener('orientationchange', () => {
    mobileTables();
})

// Run function on window resize
window.addEventListener('resize', function() {
    mobileTables();
});
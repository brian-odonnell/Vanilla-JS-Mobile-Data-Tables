# Vanilla-JS-Mobile-Data-Tables

This is some vanilla JS that I wrote to make data heavy tables look and function better on mobile.

[Github Pages Live Demo](https://brian-odonnell.github.io/Vanilla-JS-Mobile-Data-Tables/dist/index.html)

## Functions
1. Allows the table to scroll horizontally when the table width is larger than the container width on screen sizes larger than 767px
2. On screen sizes smaller than 768px it stacks the cell, inserts the copy from the corresponding `<th>` in the each cell to the left of the cell data as a `<span>`, and hides the `<thead>`
3. If the class `.no-mobile` is added to a `<th>` then that column header does not get added to the cells on mobile

## Requirements
* There needs to be a container around the table(s) with the class `.data-table` on it to allow the CSS to add the appropriate styles on mobile.
* The table(s) need to have the class `.js-table` on it to allow the JS to find the table(s).
* You may want to remove the `setTimeout()` of 100ms from the `dataTables.js` file (line #75), this is just there to to give the table time to generate from the JSON data. You can just call the `dataTables()` function normally if your table is statically on the page.
* The labels are added via `<span>` tags, so if there are already `<span>` tags in the cells then this will cause things to break

## CSS
I have attempted to leave this as unstyled as possible that way it can be added to other projects easier. All nonessential styling is being added via Bootstrap classes so the essential styles from `src/scss/main.scss` can all be copied into another project without any bloat.

## Javascript
This is all vanilla Javasctip and no library are needed. All the JS that is needed lives in `src/js/functions/dataTables.js`, the other Javascript is just generating the data table from a JSON file for this demo.

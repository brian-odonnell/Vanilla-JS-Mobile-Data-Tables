# Vanilla-JS-Mobile-Data-Tables

This is some vanilla JS that I wrote to make data heavy tables look and function better on mobile. It stacks all the cells of a row on mobile, looks up the column head copy, adds that to each cell, and hides the `<thead>`. The only requirements for this to work are:
* There needs to be a container around the table(s) with the class `.data-table` on it to allow the CSS to add the appropriate styles on mobile.
* The table(s) need to have the class `.js-table` on it to allow the JS to find the table(s).
* You may want to remove the `setTimeout()` of 100ms from the `dataTables.js` file (line #75), this is just there to to give the table time to generate from the JSON data. You can just call the `dataTables()` function normally if your table is statically on the page.

I have attemptd to leave this as unstyled as possible that way it can be added to other projects easier. All the JS that is needed lives in `src/js/functions/dataTables.js`, all the other JS is just generating the data table for this demo.
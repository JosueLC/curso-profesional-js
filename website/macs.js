// get all tables from document
const tables = document.querySelectorAll('table');
// get all rows from table 2
const rows = tables[1].querySelectorAll('tr');
// Build a new json object with the data from the table
const data = Array.from(rows).map(row => {
    const columns = row.querySelectorAll('td');
    return Array.from(columns).map(column => column.innerText);
});
// Show the data in the console
console.log(data);

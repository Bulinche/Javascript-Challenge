// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Display entire sightings data as default

tableData.forEach((sighting) => {
    console.log(sighting);
    var row = tbody.append('tr');

    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Create button
var instance = d3.select("#filter-btn");

// Create an Instance event
instance.on("click", function() {

// Clear existing table
d3.select("tbody").html("");

// Prevent the page from refreshing
d3.event.preventDefault();

// Determine which date was entered for query 
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

// Create the Sightings Query
var sightingsQuery= tableData.filter(input => input.datetime === dateTime);
console.log(sightingsQuery);

// Display the sightings query
sightingsQuery.forEach((sighting) => {
    var row = tbody.append('tr');

    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});

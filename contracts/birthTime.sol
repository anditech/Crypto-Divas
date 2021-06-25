function ladyDetails(myLadyData, id) {
 // (1) Using jQuery (and selectors) add the information for each lady
 // to the HTML you have already added for each lady to runway.html
 // (2) With the birth time, you need to call a separate function
 // with the timestamp which converts it into a user-friendly date/time format
 `Any text you like: ${format(myLadyData.birthTime)}`
}

function format(timestamp) {
    // (3) Create a new JavaScript Date object (instance) with the timestamp
    new Date(timestamp * 1000)
    // We need to multiply the timestamp from the smart contract by 1000
    // because JavaScript Date objects contain timestamps in milliseconds
    // whereas Solidity timestamps are in seconds
    // (4) Use Date instance methods to extract time data
    // e.g. day, date, month, year, hour, minutes etc.
    let hrs = instance.getHours();
    // With months/days you will need to create an array
    // with the names of the months/days
    // Use the numbers returned from the instance method as index numbers
    // to retrieve the corresponding day/month from the array
    // (5) Manipulate the data you have saved in variables
    // to generate the specific date/time format you want to display
    // for each lady's time/date of birth
    // (6) return the VALUE to where you called this format() function
    // within ${ } in ladyDetails()
    // This value can be a mix of variables and strings
}

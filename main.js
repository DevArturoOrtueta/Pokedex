
fetch('https://www.breakingbadapi.com/api/quotes/1')
    .then(response => response.json())
    .then(data => console.log(data))


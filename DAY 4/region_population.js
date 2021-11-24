var xhr = new XMLHttpRequest();
xhr.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
xhr.send();
xhr.onload = function() {
    var data = JSON.parse(xhr.response)
    for(var i = 0; i < data.length; i++) {
        console.log(`Country Name: ${data[i].name},\nRegion: ${data[i].region},\nSubregion: ${data[i].subregion},\nPopulation: ${data[i].population}`);
    }
};

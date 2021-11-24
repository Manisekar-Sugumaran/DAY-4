var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
xmlhttp.send();
xmlhttp.onload = function() {
    var data = JSON.parse(xmlhttp.response)
    for(var i = 0; i < data.length; i++) {
    console.log('${i}. The flag of the country ${data[i].name} is ${data[i].flag}');
    }
}

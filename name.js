const request = new XMLHttpRequest();
const apiurl = "https://restcountries.com/v3.1/all";
request.open("GET", apiurl);
request.send()

request.onload = function() {
    if (request.status == 200) {
        let m = JSON.parse(request.responseText)
        m.map((b) => {
            console.log(b.name.official)
        });
        m.map((c) => {
            console.log(c.region)
        });
        m.map((d) => {
            console.log(d.subregion)
        });
        m.map((e) => {
            console.log(e.population)
        });
    } else {
        request.onerror = function() {
            console.log(error)
        }
    }
}
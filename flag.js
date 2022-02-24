const request = new XMLHttpRequest();
const apiurl = "https://restcountries.com/v3.1/all";
request.open("GET", apiurl)
request.send()


request.onload = function() {
    if (request.status == 200) {
        let x = JSON.parse(request.responseText)
        x.map((m) => {
            console.log(m.flags.png)
        })
    } else {
        request.onerror = function() {
            console.log("error")
        }
    }
}
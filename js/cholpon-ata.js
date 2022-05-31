document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Cholpon-Ata&appid=11c0d3dc6093f7442898ee49d2430d20")
        .then(response => response.json())
        .then(data => {
            const cholponata = document.getElementById("Cholponata")

            cholponata.innerHTML = convert(data.main.temp);
        })
})

function convert(temperature) {
    let t = Math.round(temperature - 273.15)
    if (t > 0) {
        t = `+${t}`
    } 
    return t
}
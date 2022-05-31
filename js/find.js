document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("button")
    btn.addEventListener("click", () => {
        let txt = document.querySelector("input").value
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${txt}&appid=11c0d3dc6093f7442898ee49d2430d20`)
            .then(response => response.json())
            .then(data => {
                const temp = document.getElementById("temp")
                const feels = document.getElementById("feels")
                const short = document.getElementById("short")
                const description = document.getElementById("description")

                temp.innerText = convert(data.main.temp)
                feels.innerText = convert(data.main.feels_like)
                short.innerText = data.weather[0].main
                description.innerText = data.weather[0].description

                document.querySelector("h4").innerText = txt
                document.getElementById("result").style.display = "block"
            })
    })
})

function convert(temperature) {
    let t = Math.round(temperature - 273.15)
    if ( t > 0 ) {
        t = `+${t}`
    }
    return t
}
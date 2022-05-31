var app_id = "d844456b080641219066aa386c5144f5"

document.addEventListener("DOMContentLoaded", () => setInterval(main, 1000));

function main() {
    let url = `https://openexchangerates.org/api/latest.json?app_id=${app_id}`;
    fetch(url).then(response => response.json()).then(data => {
        console.log(data)
        let usd = data.rates.KGS;
        usd = Math.round(usd * 100) / 100
        const element = document.getElementById("usdValue");
        element.innerHTML = usd;

        let eurToDoll = data.rates.EUR;
        let eur = Number(usd / eurToDoll)
        eur = Math.round(eur * 100) / 100
        const element2 = document.getElementById("eurValue");
        element2.innerHTML = eur;

        let rubToDoll = data.rates.RUB;
        let rub = Number(usd / rubToDoll)
        rub = Math.round(rub * 100) / 100
        const element3 = document.getElementById("rubValue");
        element3.innerHTML = rub;
    })
}

const MY_COLOR = "#006400";

function onClick() {
    let amount = document.getElementsByName("amount"); 
    let cost = document.getElementsByName("cost");
    let result = document.getElementById("result");

    const re = /\D/; 
    let checkAmount = amount[0].value.match(re);
    let checkCost = cost[0].value.match(re);

    if (amount[0].value === "" || cost[0].value === "") {
        result.style.color = "Black";
        result.innerHTML = "ЗАПОЛНИ ВСЕ ПОЛЯ!";
    } else if (checkAmount === null && checkCost === null) {
        result.style.color = MY_COLOR;
        let intAmount = parseInt(amount[0].value);
        let intCost = parseInt(cost[0].value);
        result.innerHTML = "Итоговый результат: " + intAmount * intCost;
    } else {
        result.style.color = "black";
        result.innerHTML = "Как ты будешь перемножать буквы?!";
    }
}
window.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("btn-calc");s
    btn.addEventListener("click", onClick);
});
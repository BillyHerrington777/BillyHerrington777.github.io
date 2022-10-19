const MY_COLOR = "#006400";

function onClick() {
    let amount = document.getElementsByName("amount"); 
    let cost = document.getElementsByName("cost");
    let result = document.getElementById("result");

    const re = /\D/; 
    let checkAmount = amount[0].value.match(re);
    let checkCost = cost[0].value.match(re);

    if (amount[0].value === "" || cost[0].value === "") {
        result.style.color = "green";
        result.innerHTML = "Заполните все поля";
    } else if (checkAmount === null && checkCost === null) {
        result.style.color = MY_COLOR;
        let intAmount = parseInt(amount[0].value);
        let intCost = parseInt(cost[0].value);
        result.innerHTML = "Итоговый ответ: " + intAmount * intCost;
    } else {
        result.style.color = "green";
        result.innerHTML = "Нужно вводить цифры";
    }
}

window.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("btn-calculator");
    btn.addEventListener("click", onClick);
});

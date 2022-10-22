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
    let purchase = document.getElementById("purchase");
    let prodAmount = document.getElementById("amount");
    let fieldAmount = document.getElementsByName("prod-amount");
    let price;
    const priceList = {
        table: [1500, 1700],
        chair: 1000,
        sofa: [5000, 10000]
    };

    let select = document.getElementsByName("prod-type");
    select[0].addEventListener("change", function (event) {
        let selected = event.target;
        let radios = document.getElementById("prod-radios");
        let checkbox = document.getElementById("prod-checkbox");

        let radioBtns = document.querySelectorAll("input[name=size]");
        radioBtns.forEach(function (radioBtn) {
            if (radioBtn.checked) {
                radioBtn.checked = false;
            }
        });

        let home = document.getElementsByName("home");
        if (home[0].checked) {
            home[0].checked = false;
        }

        prodAmount.style.display = "none";
        fieldAmount[0].value = "";

        purchase.innerHTML = "";

        if (selected.value === "0") {
            prodAmount.style.display = "block";
            radios.style.display = "none";
            checkbox.style.display = "none";
        } else if (selected.value === "1") {
            radios.style.display = "block";
            checkbox.style.display = "none";
        } else {
            prodAmount.style.display = "block";
            radios.style.display = "none";
            checkbox.style.display = "block";
        }
    });

    let radioBtns = document.querySelectorAll("input[name=size]");
    radioBtns.forEach(function (radioBtn) {
        radioBtn.addEventListener("change", function (event) {
            prodAmount.style.display = "block";

            let target = event.target;
            let amount = parseInt(fieldAmount[0].value);

            if (fieldAmount[0].value !== "") {
                purchase.style.color = MY_COLOR;
                if (target.value === "0") {
                    price = amount * priceList.table[1];
                    purchase.innerHTML = "Цена Столов: " + price;
                } else {
                    price = amount * priceList.artem[0];
                    purchase.innerHTML = "Цена Столов: " + price;
                }
            }
        });
    });

    let home = document.getElementsByName("home");
    home[0].addEventListener("change", function (event) {
        let target = event.target;
        let amount = parseInt(fieldAmount[0].value);

        if (fieldAmount[0].value !== "") {
            purchase.style.color = MY_COLOR;
            if (target.checked) {
                price = amount * priceList.sofa[1];
                purchase.innerHTML = "Цена Диванов: " + price;
            } else {
                price = amount * priceList.sofa[0];
                purchase.innerHTML = "Цена Диванов: " + price;
            }
        }
    });

    fieldAmount[0].addEventListener("input", function (event) {
        let target = event.target;

        const re = /\D/; // \D - нашло НЕ цифру. ну а шаблоны для regex пишутся в /.../
        let checkAmount = target.value.match(re);

        if (checkAmount === null) {
            if (target.value !== "") {
                purchase.style.color = MY_COLOR;

                let amount = parseInt(target.value);

                if (select[0].value === "0") {
                    price = amount * priceList.chair;
                    purchase.innerHTML = "Цена Стульев: " + price;
                } else if (select[0].value === "1") {
                    if (radioBtns[0].checked) {
                        price = amount * priceList.table[1];
                        purchase.innerHTML = "Цена Столов: " + price;
                    } else {
                        price = amount * priceList.table[0];
                        purchase.innerHTML = "Цена Столов: " + price;
                    }
                } else {
                    if (home[0].checked) {
                        price = amount * priceList.sofa[1];
                        purchase.innerHTML = "Цена Диванов: " + price;
                    } else {
                        price = amount * priceList.sofa[0];
                        purchase.innerHTML = "Цена Диванов: " + price;
                    }
                }
            } else {
                purchase.innerHTML = "";
            }
        } else {
            purchase.style.color = "green";
            purchase.innerHTML = "Ошибка!";
        }
    });

    let btn = document.getElementById("btn-calc");
    btn.addEventListener("click", onClick);
});
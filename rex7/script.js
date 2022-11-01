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




function change() {
    let select = document.getElementById("product-type");
    let amount = document.getElementById("amount-2");
    let result = document.getElementById("result-2");
    result.innerHTML="";
    amount.style.display="block";
    let sizelabel=document.querySelectorAll("label.radio");
    let checkboxlabel=document.querySelector("label.checkbox");
    if (select.value==='1'){
        sizelabel[0].style.display="none";
        sizelabel[1].style.display="none";
        checkboxlabel.style.display="none";
    } else if (select.value==='2'){
        sizelabel[0].style.display="block";
        sizelabel[1].style.display="block";
        checkboxlabel.style.display="none";
    } else if (select.value==='3'){
        sizelabel[0].style.display="none";
        sizelabel[1].style.display="none";
        checkboxlabel.style.display="block";
    }
    amount.value="";
}

let arr=new Array();
let pages=new Array(8);
function sliderResize(){
    if (arr.length===0 || document.documentElement.clientWidth>=576 && arr.length!=4 || document.documentElement.clientWidth<576 && arr.length!=8){
    if(document.documentElement.clientWidth>=576){
        let m=4;
        let n=4;
        arr.length=m;
        for(let i=0;i<arr.length;i++){
            arr[i]=new Array(n);
            for(let j=0;j<arr[i].length;j++){
                arr[i][j]=document.getElementById("sliderImg-"+(n*i+j+1));
                if (i===0) arr[i][j].style.display="block";
                else arr[i][j].style.display="none";
            }
        }
    }else {
        let m=8;
        let n=2;
        arr.length=m;
        for(let i=0;i<arr.length;i++){
            arr[i]=new Array(n);
            for(let j=0;j<arr[i].length;j++){
                arr[i][j]=document.getElementById("sliderImg-"+(n*i+j+1));
                if (i===0) arr[i][j].style.display="block";
                else arr[i][j].style.display="none";
            }
        }
    }
    for(let i=0;i<pages.length;i++){
        if (i<arr.length) pages[i].style.display="block";
        else pages[i].style.display="none";
    }
    pages[0].checked=true;
    }
}

function sliderToLeft(){
    let active;
    for(let i=0;i<arr.length;i++)
        if (arr[i][0].style.display==="block"){
            active=i;
            break;
        }
    arr[active].forEach(function(el){el.style.display="none";});
    active--;
    if(active===-1) active+=arr.length;
    arr[active].forEach(function(el){el.style.display="block";});
    pages[active].checked=true;
}

function sliderToRight(){
    let active;
    for(let i=0;i<arr.length;i++)
        if (arr[i][0].style.display==="block"){
            active=i;
            break;
        }
    arr[active].forEach(function(el){el.style.display="none";});
    active++;
    if(active===arr.length) active=0;
    arr[active].forEach(function(el){el.style.display="block";});
    pages[active].checked=true;
}

function pageChange(page){
    let active;
    for(let i=0;i<arr.length;i++)
        if (arr[i][0].style.display==="block"){
            active=i;
            break;
        }
    arr[active].forEach(function(el){el.style.display="none";});
    arr[page].forEach(function(el){el.style.display="block";});
}

window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("resize",sliderResize);
    let buttonLeft = document.getElementById("button-left");
    buttonLeft.addEventListener("click",sliderToLeft);
    let buttonRight = document.getElementById("button-right");
    buttonRight.addEventListener("click",sliderToRight);
    let pager=document.getElementById("pager");
    pages=pager.querySelectorAll("input");
    pages.forEach(function(button, page){button.addEventListener("change", function(){pageChange(page);} );});
    sliderResize();
});
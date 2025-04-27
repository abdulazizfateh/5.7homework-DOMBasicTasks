// TASK 1
const counterBtnEl = document.querySelector(".counter_btn");
const counterBtnCounterEl = document.querySelector(".counter_btn span");

let offset = JSON.parse(localStorage.getItem("counter")) || 0;
counterBtnCounterEl.innerHTML = offset;

counterBtnEl.addEventListener("click", () => {
    offset++;
    counterBtnCounterEl.innerHTML = offset;
    localStorage.setItem("counter", JSON.stringify(offset));
})

counterBtnEl.addEventListener("dblclick", () => {
    offset = 0;
    counterBtnCounterEl.innerHTML = offset;
    localStorage.setItem("counter", JSON.stringify(offset));
})





// TASK 2
const userSeemoreBtnEl = document.querySelector(".user_seemore_btn");
const userInfo = document.querySelector(".user_info");

userSeemoreBtnEl.innerHTML = "See more";
let count = 0;

userSeemoreBtnEl.addEventListener("click", () => {
    count++;
    userInfo.classList.toggle("show");
    if (count % 2 === 0) {
        userSeemoreBtnEl.innerHTML = "See more";
    } else {
        userSeemoreBtnEl.innerHTML = "See less";
    }
})





// TASK 3
const createFormEl = document.querySelector(".create_form");
const inputFirstName = createFormEl.firstElementChild;
const inputLastName = createFormEl.children[1];
const tBodyEl = document.querySelector("tbody");

let number = 0;
createFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputFirstName.value.trim() === "" || inputLastName.value.trim() === "") {
        return null;
    }
    number++;
    const tr = document.createElement("tr");
    tr.innerHTML = `     
    <tr>
        <td>${number}</td>
        <td>${inputFirstName.value}</td>
        <td>${inputFirstName.value}</td>
    </tr>`
    tBodyEl.appendChild(tr);
    inputFirstName.value = "";
    inputLastName.value = "";
})





// TASK 4
const loginFormEl = document.querySelector(".login_form");
const loginResponseEl = document.querySelector(".login_response");

loginFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    if (loginFormEl.children[0].value.trim() === "" || loginFormEl.children[1].value.trim() === "") {
        return null;
    }

    if (loginFormEl.children[0].value === "john32" && loginFormEl.children[1].value === "123456") {
        loginResponseEl.innerHTML = "Hush kelibsiz"
    } else {
        loginResponseEl.innerHTML = "username yoki parol no'to'g'ri";
    }
    loginFormEl.children[0].value = "";
    loginFormEl.children[1].value = "";
})





// TASK 5
const btnsEl = document.querySelector(".btns");
const textEl = document.querySelector(".text");
btnsEl.addEventListener("click", (e) => {
    textEl.className = `text + ${e.target.classList.value}`;
})
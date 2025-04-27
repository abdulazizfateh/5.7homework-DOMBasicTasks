//  Project 1
const nameInput = document.querySelector("#nameInput");
const saveNameBtn = document.querySelector("#saveNameBtn");
const showName = document.querySelector("#showName");

let name = localStorage.getItem("name") || "Unknown";
showName.innerHTML = name;

saveNameBtn.addEventListener("click", () => {
    let inputNameValue = nameInput.value;
    if (inputNameValue.trim() === "") {
        return null;
    }
    localStorage.setItem("name", inputNameValue);
    showName.innerHTML = localStorage.getItem("name");
    nameInput.value = "";
})




//  Project 2
const colorInput = document.querySelector("#colorInput");
const saveColorBtn = document.querySelector("#saveColorBtn");
const ulEl = document.querySelector(".list")

let colors = JSON.parse(localStorage.getItem("colors")) || [];

saveColorBtn.addEventListener("click", () => {
    if (colorInput.value.trim() === "") {
        return null;
    }
    let color = colorInput.value;
    colors.push(color);
    localStorage.setItem("colors", JSON.stringify(colors));
    showColor();
    colorInput.value = "";
})

const showColor = () => {
    ulEl.innerHTML = null;
    colors.forEach((item, index) => {
        const newli = document.createElement("li");
        const newDelBtn = document.createElement("button");
        newDelBtn.innerHTML = "Delete";
        newli.innerHTML = item;
        newli.appendChild(newDelBtn);
        ulEl.appendChild(newli);
        newDelBtn.addEventListener("click", () => {
            colors = colors.filter((item, ind) => ind !== index);
            localStorage.setItem("colors", JSON.stringify(colors));
            ulEl.removeChild(newli);
        })
    });
}
showColor();

// The below deletion way is not that much efficient as opposed to the one above, as it calls showColor() again, then it renders all the array elements one by one to splice(delete) only one element.
// In other words, to remove one element, it re-renders everything from scratch except for the one spliced(deleted)

// newDelBtn.addEventListener("click", () => {
//     colors.splice(index, 1);
//     localStorage.setItem("colors", JSON.stringify(colors));
//     showColor();
// })




//  Project 3
const registerFormEl = document.querySelector(".register_form");
const registeredUsersEl = document.querySelector(".registered_users");
const firstNameInputEl = document.querySelector("#firstNameInput");
const lastNameInputEl = document.querySelector("#lastNameInput");
const emailInputEl = document.querySelector("#emailInput");
const phoneNumberInputEl = document.querySelector("#phoneNumberInput");


let users = JSON.parse(localStorage.getItem("users")) || [];

registerFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    if (firstNameInputEl.value.trim() === "" || lastNameInputEl.value.trim() === "" || emailInputEl.value.trim() === "" || phoneNumberInputEl.value.trim() === "") {
        return null;
    }
    addRegisteredUsers({
        firstName: firstNameInputEl.value,
        lastName: lastNameInputEl.value,
        email: emailInputEl.value,
        phoneNumber: phoneNumberInputEl.value,
        id: new Date().getTime()
    });
    renderUser();
    firstNameInputEl.value = "";
    lastNameInputEl.value = "";
    emailInputEl.value = "";
    phoneNumberInputEl.value = "";
})


const addRegisteredUsers = (user) => {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}

const renderUser = () => {
    registeredUsersEl.innerHTML = "";
    users.forEach((item, index) => {
        const newRegisteredUserEl = document.createElement("div");
        newRegisteredUserEl.className = "user_card"
        newRegisteredUserEl.innerHTML = `
            <div class="user_card_firstname">
                <p>First Name: ${item.firstName}</p>
                <button class="user_card_edit_btn" id="firstName">
                    <img src="./images/edit.svg" alt="Edit Icon" width="20">
                 </button>
            </div>
            <div class="user_card_lastname">
                <p>Last Name: ${item.lastName}</p>
                <button class="user_card_edit_btn" id="lastName">
                    <img src="./images/edit.svg" alt="Edit Icon" width="20">
               </button>
            </div>
            <div class="user_card_email">
                <p>Email: ${item.email}</p>
                <button class="user_card_edit_btn" id="email">
                    <img src="./images/edit.svg" alt="Edit Icon" width="20">
                </button>
            </div>
            <div class="user_card_phone_number">
                <p>Phone Number: ${item.phoneNumber}</p>
                <button class="user_card_edit_btn" id="phoneNumber">
                    <img src="./images/edit.svg" alt="Edit Icon" width="20">
                </button>
            </div>
            <button class="user_card_delete_btn" id="${item.id}">
                <img src="./images/delete.svg" alt="Edit Icon" width="20">
            </button>
            `
        registeredUsersEl.appendChild(newRegisteredUserEl);

        const userCardDeleteBtns = document.querySelectorAll(".user_card_delete_btn");
        userCardDeleteBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                if (item.id == btn.id) {
                    users = users.filter((user) => user.id !== item.id);
                    localStorage.setItem("users", JSON.stringify(users));
                    registeredUsersEl.removeChild(newRegisteredUserEl);
                }
            })
        })
        const usercCardEditBtns = document.querySelectorAll(".user_card_edit_btn");
        usercCardEditBtns.forEach((editBtn) => {
            editBtn.addEventListener("click", () => {
                if (editBtn.id === "firstName") {
                    item.firstName = prompt("Edit your first name");
                    localStorage.setItem("users", JSON.stringify(users));
                    renderUser();
                }
                if (editBtn.id === "lastName") {
                    item.lastName = prompt("Edit your last name");
                    localStorage.setItem("users", JSON.stringify(users));
                    renderUser();
                }
                if (editBtn.id === "email") {
                    item.email = prompt("Edit your email");
                    localStorage.setItem("users", JSON.stringify(users));
                    renderUser();
                }
                if (editBtn.id === "phoneNumber") {
                    item.phoneNumber = prompt("Edit your phone number");
                    localStorage.setItem("users", JSON.stringify(users));
                    renderUser();
                }
            })
        })
    })
}
renderUser();

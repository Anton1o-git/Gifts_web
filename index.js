document.getElementById("property-button").onclick = function () {
    alert("🎁 Подарункова кнопка активована через властивість!");
};

const multiBtn = document.getElementById("multi-handler");
multiBtn.addEventListener("click", function() {
    alert("📦 Подарунок упаковано!");
});
multiBtn.addEventListener("click", function() {
    alert("✅ Подарунок готовий до відправки!");
});

const objBtn = document.getElementById("object-handler");

const giftHandler = {
    handleEvent(e) {
        alert("🎈 Святкова акція! Залітай! — " + e.currentTarget.textContent);

        e.currentTarget.removeEventListener("click", giftHandler);
        e.currentTarget.textContent = "Акцію вже отримано";
        e.currentTarget.disabled = true;
    }
};

objBtn.addEventListener("click", giftHandler);

const giftList = document.getElementById("gift-list");

giftList.onclick = function (event) {
    const target = event.target;
    if (target.tagName === "LI") {
        const allItems = giftList.querySelectorAll("li");
        allItems.forEach(function(li) {
            li.style.backgroundColor = "";
        });
        target.style.backgroundColor = "#ccffcc";
        alert("Ви обрали: " + target.textContent);
    }
};

const menu = document.getElementById("action-menu");

menu.onclick = function (event) {
    const button = event.target.closest("button");
    if (!button) return;

    const action = button.dataset.action;
    switch (action) {
        case "open":
            alert("📂 Ви відкрили список подарунків");
            break;
        case "save":
            alert("💾 Подарунок додано до списку бажань");
            break;
        case "delete":
            alert("🗑️ Подарунок видалено з корзини");
            break;
        default:
            alert("Невідома дія");
    }
};

// Лаба 8
const hoverItems = document.querySelectorAll(".hover-gift");

hoverItems.forEach(function(item) {
    item.addEventListener("mouseover", function(event) {
        const from = event.relatedTarget;
        if (!from || !item.contains(from)) {
            event.target.classList.add("hovered");
        }
    });

    item.addEventListener("mouseout", function(event) {
        const to = event.relatedTarget;
        if (!to || !item.contains(to)) {
            event.target.classList.remove("hovered");
        }
    });
});

const gift = document.getElementById("draggable-gift");
let isDragging = false;

gift.addEventListener("mousedown", function (event) {
    isDragging = true;
    gift.style.cursor = "grabbing";
});

document.addEventListener("mousemove", function (event) {
    if (!isDragging) return;
    const containerRect = document.getElementById("drag-container").getBoundingClientRect();
    gift.style.left = (event.clientX - containerRect.left - gift.offsetWidth / 2) + "px";
    gift.style.top = (event.clientY - containerRect.top - gift.offsetHeight / 2) + "px";
});

document.addEventListener("mouseup", function () {
    isDragging = false;
    gift.style.cursor = "grab";
});

function userDialog() {
    alert("Привіт!");
    const name = prompt("Як тебе звати?");
    if (!name) {
        alert("Може наступного разу 😢");
    return;
    }

    const agree = confirm("Хочеш підкинемо ідею для подарунка?");
    if (agree) {
        alert(`🎁 ${name}, обери чашку або шоколад!`);
    } else {
        alert("Може наступного разу 😢");
    }
}

function showDeveloperInfo(surname, name, position = "Розробник сайту") {
    const container = document.getElementById("developer-info");
    container.textContent = `Сторінку створив: ${surname} ${name}, ${position}`;
}
showDeveloperInfo("Лихоліт", "Антон");

function compareStrings() {
    const s1 = prompt("Введи перший рядок:");
    const s2 = prompt("Введи другий рядок:");
    if (s1 && s2) {
        alert("Більший рядок: " + (s1 > s2 ? s1 : s2));
    }
}

function changeBackground() {
    const orig = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#fff0f0";
    setTimeout(() => {
        document.body.style.backgroundColor = orig || "#dafff6";
    }, 30000);
}

function redirectToOffers() {
    location.href = "offers.html";
}

// DOM
function manipulateDOM() {

    const container = document.getElementById("gift-list-container");
    container.innerHTML = "<p>🆕 Список оновлено!</p>";

    const ideaList = document.querySelectorAll("ul li");
        if (ideaList.length > 0) {
            ideaList[0].textContent = "Електронна книга";
        }

    // createElement + createTextNode + append
    const block = document.createElement("p");
    const text = document.createTextNode("🎂 Новий подарунок: Торт");
    block.appendChild(text);
    container.append(block);

    // outerHTML
    container.append(block.outerHTML);

    // nodeValue
    const nodeNote = document.createTextNode("🎁 Подарунок: шоколад");
    const nodeContainer = document.createElement("p");
    nodeNote.nodeValue = "🛍️ Знижка 20% на всі подарунки";
    nodeContainer.appendChild(nodeNote);
    container.append(nodeContainer);

    // textContent
    const note = document.createElement("p");
    note.textContent = "📅 Акція діє до 30 червня";
    container.append(note);

    // prepend
    const pre = document.createElement("p");
    pre.textContent = "🚨 Увага!";
    container.prepend(pre);

    // after
    const afterText = document.createElement("p");
    afterText.textContent = "🔔 Не проґав!";
    container.after(afterText);

    // replaceWith
    const repl = document.createElement("p");
    repl.textContent = "🌹 Новий подарунок: Квіти";
    setTimeout(() => {
        block.replaceWith(repl);
    }, 6000);

    // remove
    setTimeout(() => {
        repl.remove();
    }, 12000);

}

document.getElementById("start-dialog").addEventListener("click", userDialog);
document.getElementById("change-bg").addEventListener("click", changeBackground);
document.getElementById("redirect").addEventListener("click", redirectToOffers);
document.getElementById("compare-strings").addEventListener("click", compareStrings);

manipulateDOM();

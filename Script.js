

alert("כשמזמינים קפה באתר מומלץ להשתמש בעוגיות."); 


function getJokes(box) {
    return JSON.parse(box.getAttribute("data-jokes"));
}

function updateJoke(box, index) {
    const jokes = getJokes(box);
    box.querySelector(".joke-display").innerText = jokes[index];
}

function nextJoke(type) {
    const box = document.querySelector(`[data-type="${type}"]`);
    let index = parseInt(box.getAttribute("data-index") || "0");
    const jokes = getJokes(box);

    index = (index + 1) % jokes.length;
    box.setAttribute("data-index", index);
    updateJoke(box, index);
}

function prevJoke(type) {
    const box = document.querySelector(`[data-type="${type}"]`);
    let index = parseInt(box.getAttribute("data-index") || "0");
    const jokes = getJokes(box);

    index = (index - 1 + jokes.length) % jokes.length;
    box.setAttribute("data-index", index);
    updateJoke(box, index);
}


document.querySelectorAll(".joke-box").forEach(box => {
    box.setAttribute("data-index", 0);
    updateJoke(box, 0);
});
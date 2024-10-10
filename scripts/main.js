import API from "./api.js";
import UI from "./ui.js";

const api = new API();
const ui = new UI();

document.addEventListener("DOMContentLoaded", async() => {
    ui.renderLoader();

    api
        .getPopular()
        .then((data) => ui.renderCards(data))
        .catch((err) => {
            console.log(err);
            alert("Üzgünüz bir sorun oluştu");
        });
});

ui.form.addEventListener("submit", (e) => {
    e.preventDefault();

    const query = e.target[0].value;

    if (query.trim() === "") return alert("Lütfen geçerli bir metin aratın");

    ui.renderLoader();

    ui.updateTitle(query + " için sonuçlar");

    api
        .searchMusic(query)
        .then((data) => ui.renderCards(data))
        .catch((err) => {
            console.log(err);
            alert("Üzgünüz bir sorun oluştu");
        });
});

ui.list.addEventListener("click", (e) => {
    if (e.target.className === "play") {

        const card = e.target.closest(".card");


        const data = card.dataset;


        ui.renderPlayer(data);
    }
});
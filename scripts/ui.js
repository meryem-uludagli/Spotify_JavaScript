export default class UI {
    constructor() {
        this.list = document.querySelector(".list");
        this.form = document.querySelector("form");
        this.title = document.querySelector("#title");
        this.player = document.querySelector(".player");
        this.audio = document.querySelector(".player audio");
    }

    renderCards(songs) {
        this.list.innerHTML = "";

        songs.forEach((song) => {
            const div = document.createElement("div");
            div.className = "card";

            div.dataset.title = song.title;
            div.dataset.subtitle = song.subtitle;
            div.dataset.img = song.images.coverarthq;
            div.dataset.mp3 = song.hub.actions[1].uri;

            div.innerHTML = `
             <figure>
                <img
                  src="${song.images.coverarthq}"
                />
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>
  
            <div class="card-info">
              <h3>${song.title}</h3>
              <h4>${song.subtitle}</h4>
            </div>
        `;
            this.list.appendChild(div);
        });
    }

    renderLoader() {
        this.list.innerHTML = `
<div aria-label="Loading..." role="status" class="loader">
  <svg class="icon" viewBox="0 0 256 256">
    <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
  </svg>
  <span class="loading-text">Loading...</span>
</div>

      `;
    }

    updateTitle(text) {
        this.title.textContent = text;
    }

    renderPlayer(song) {
        this.player.innerHTML = `
        <div class="info">
          <img
            src="${song.img}"
          />
  
          <div>
            <h5>${song.title}</h5>
            <p>${song.subtitle}</p>
          </div>
        </div>
  
        <audio controls autoplay>
          <source src="${song.mp3}" />
        </audio>
  
        <div class="icons">
          <i class="bi bi-music-note-list"></i>
          <i class="bi bi-boombox-fill"></i>
          <i class="bi bi-pc-display"></i>
        </div>
      `;

        const audio = this.player.querySelector("audio");

        audio.addEventListener("play", this.toggleAnimation);
        audio.addEventListener("pause", this.toggleAnimation);
    }

    toggleAnimation() {
        const img = document.querySelector(".info img");
        img.classList.toggle("animate");
    }
}
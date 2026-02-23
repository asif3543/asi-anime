const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdownMenu");
const animeList = document.getElementById("animeList");
const searchInput = document.getElementById("searchInput");

menuBtn.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Dummy Anime (Testing)
const animes = [
    { name: "Naruto", image: "assets/placeholder.jpg" },
    { name: "One Piece", image: "assets/placeholder.jpg" },
    { name: "Attack on Titan", image: "assets/placeholder.jpg" }
];

function loadAnime(list) {
    animeList.innerHTML = "";
    list.forEach(anime => {
        const card = document.createElement("div");
        card.className = "anime-card";
        card.innerHTML = `
            <img src="${anime.image}">
            <p>${anime.name}</p>
        `;
        card.onclick = () => {
            window.location.href = "anime.html?name=" + anime.name;
        };
        animeList.appendChild(card);
    });
}

loadAnime(animes);

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    const filtered = animes.filter(a => a.name.toLowerCase().includes(value));
    loadAnime(filtered);
});

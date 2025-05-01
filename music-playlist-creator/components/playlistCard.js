export function createPlaylistCard(playlist) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img height="250px" src="${playlist.playlist_art}" alt="${playlist.playlist_name}">
        <h2>${playlist.playlist_name}</h2>
        <p>${playlist.playlist_creator}</p>
        <span>
            <div class="heart" id="heart-${playlist.playlistID}">🩶</div>
            <div class="like-count">${playlist.likeCount}</div>
        </span>
    `;

    const heart = card.querySelector('.heart');
    const count = card.querySelector('.like-count');

    heart.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent modal from opening on heart click
      
        let currentCount = parseInt(count.textContent, 10);
      
        if (heart.classList.contains('liked')) {
          heart.classList.remove('liked');
          heart.innerHTML = "🩶";
          count.textContent = currentCount - 1;
        } else {
          heart.classList.add('liked');
          heart.innerHTML = "❤️";
          count.textContent = currentCount + 1;
        }
      });
      

    return card;
}

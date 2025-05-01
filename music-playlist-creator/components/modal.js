export function openModal(playlist) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
  
    modalContent.innerHTML = `
    <button id="close-modal">✖</button>
    <div class="modal-header">
      <img src="${playlist.playlist_art}" alt="${playlist.playlist_name}">
      <div class="modal-info">
        <h2>${playlist.playlist_name}</h2>
        <p>Created by: ${playlist.playlist_creator}</p>
      </div>
    </div>
    <button class="shuffle-button">🔀 Shuffle</button>
    <h3>Songs</h3>
    <div class="song-list">
    ${playlist.songs.map(song => `
        <div class="song-card">
        <img src="${song.cover_art}" alt="${song.title}">
        <div class="song-info">
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
            <p>${song.album}</p>
        </div>
        <div class="song-duration">${song.duration}</div>
        </div>
    `).join('')}
    </div>
  `;
  
  
    // Show modal with flex for centering
    modal.style.display = 'flex';
  
    // Add close button functionality
    document.getElementById('close-modal').addEventListener('click', () => {
      modal.style.display = 'none';
    });

    const shuffleButton = document.getElementsByClassName('shuffle-button')[0];
    shuffleButton.addEventListener('click', () => {
      const songList = document.querySelector('.song-list');
      const songs = Array.from(songList.children);
      const shuffledSongs = songs.sort(() => Math.random() - 0.5);
      songList.innerHTML = '';
      shuffledSongs.forEach(song => songList.appendChild(song));
    });
    
  }
  
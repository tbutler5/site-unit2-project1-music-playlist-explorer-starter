fetch('./data/data.json')
  .then(response => response.json())
  .then(data => {
    const playlists = data.playlists;
    const randomIndex = Math.floor(Math.random() * playlists.length);
    const playlist = playlists[randomIndex];

    renderFeaturedPlaylist(playlist);
  })
  .catch(err => console.error('Error loading data:', err));

function renderFeaturedPlaylist(playlist) {
  const container = document.getElementById('featured-container');

  container.innerHTML = `
    <div class="featured-layout">
      <div class="featured-left">
        <img src="${playlist.playlist_art}" alt="${playlist.playlist_name}" class="featured-image" />
        <h2>${playlist.playlist_name}</h2>
        <p>By ${playlist.playlist_creator}</p>
      </div>
      <div class="featured-right">
        <h3>Songs</h3>
        <div class="song-list">
          ${playlist.songs.map(song => `
            <div class="song-card">
              <img src="${song.cover_art}" alt="${song.title}" />
              <div class="song-info">
                <h4>${song.title}</h4>
                <p>${song.artist} – ${song.album}</p>
              </div>
              <div class="song-duration">${song.duration}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

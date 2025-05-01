import { createPlaylistCard } from './components/playlistCard.js';
import { openModal } from './components/modal.js';

fetch('./data/data.json')
    .then(response => response.json())
    .then(data => {
    const container = document.getElementById('playlist-container');

    data.playlists.forEach(playlist => {
        const card = createPlaylistCard(playlist);
        container.appendChild(card);

        // Add click listener for modal opening
        card.addEventListener('click', () => {
            openModal(playlist);
        });
        // Add click listener outside of modal for closing 
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
              modal.style.display = 'none';
            }
          });
          
    });
})
.catch(error => console.error('Error loading JSON:', error));

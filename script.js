document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playlist = document.getElementById('playlist');

    const songs = [
        'audio/song1.mp3',
        'audio/song2.mp3'
    ];

    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Song ${index + 1}`;
        listItem.addEventListener('click', () => playSong(song));
        playlist.appendChild(listItem);
    });

    function playSong(song) {
        audioPlayer.src = song;
        audioPlayer.play();
    }
});

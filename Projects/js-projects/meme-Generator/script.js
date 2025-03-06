document.getElementById('newMemeButton').addEventListener('click', function() {
    fetch('https://meme-api.com/gimme')
        .then(response => response.json())
        .then(data => {
            const memeImage = document.getElementById('memeImage');
            memeImage.src = data.url;
            memeImage.alt = data.title;
        })
        .catch(error => console.error('Error fetching meme:', error));
});
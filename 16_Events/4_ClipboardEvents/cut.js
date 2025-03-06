document.addEventListener('DOMContentLoaded', () => {
    const cutInput = document.getElementById('cutInput');
    const cutButton = document.getElementById('cutButton');
    const cutMessage = document.getElementById('cutMessage');

    cutButton.addEventListener('click', () => {
        cutInput.select();
        document.execCommand('cut');
        cutMessage.innerText = 'Text cut to clipboard!';
        setTimeout(() => {
            cutMessage.innerText = '';
        }, 3000);
    });

    cutInput.addEventListener('cut', () => {
        console.log('Cut event triggered');
    });
});
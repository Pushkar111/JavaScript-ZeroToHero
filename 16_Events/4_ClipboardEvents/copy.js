document.addEventListener("DOMContentLoaded", () => {
    const copyInput = document.getElementById("copyInput");
    const copyButton = document.getElementById("copyButton");
    const copyMessage = document.getElementById("copyMessage");

    copyButton.addEventListener("click", () => {
        copyInput.select();
        document.execCommand('copy');
        copyMessage.innerText = 'Text copied to clipboard!';
        setTimeout(() => {
            copyMessage.innerText = '';
        }, 3000);
    });

    copyInput.addEventListener('copy', () => {
        console.log('Copy event triggered');
    });
});
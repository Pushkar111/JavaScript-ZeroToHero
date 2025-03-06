function clickMe() {
    window.location.href = "https://www.google.com";
}

// copy

let copyBtn = document.getElementById("copy-btn");
let copyTextPara = document.getElementById("myPara");

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(copyTextPara.innerText).then(() => {
        alert('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});
// Function to convert text to SHA-256 hash
function textToHash() {
    const text = document.getElementById('textInput').value;
    const hash = CryptoJS.SHA256(text).toString();
    document.getElementById('hashOutput').textContent = hash;
}




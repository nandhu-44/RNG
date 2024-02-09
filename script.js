function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100);
    document.getElementById('randomNumber').innerText = `Random Number: ${randomNumber}`;
}
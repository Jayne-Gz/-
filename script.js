function displayText() {
    textBox.innerHTML = '';
    let text = texts[currentPage];
    let index = 0;

    const interval = setInterval(() => {
        textBox.innerHTML += text[index++];
        if (index === text.length) {
            clearInterval(interval);
            downArrow.style.display = 'block';
        }
    }, 200); // Faster text speed
}


function toggleLightMode() {
    document.body.classList.toggle('light-mode');
    
    let articles = document.querySelectorAll('article');
    let legends = document.querySelectorAll('legend');
    let labels = document.querySelectorAll('label');
    articles.forEach(function(article) {
        article.classList.toggle('light-mode');
    });

    legends.forEach(function(legend) {
        legend.classList.toggle('light-mode');
    });

    labels.forEach(function(label) {
        label.classList.toggle('light-mode');
    });

    const modeSwitchButton = document.querySelector('.mode-switch');
    modeSwitchButton.classList.toggle('light-mode');
}

function percSzamitas () {

    const text = document.getElementById("article").innerText;
    const speed = 250;    /**   225 szó per perc   */
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / speed);

    document.getElementById("time").innerText = "Olvasási idő: " + time + " perc";
}

percSzamitas();
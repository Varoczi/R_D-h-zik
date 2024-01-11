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
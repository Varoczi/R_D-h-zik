function toggleLightMode() {
    document.body.classList.toggle('light-mode');
    
    var articles = document.querySelectorAll('article');
    var legends = document.querySelectorAll('legend');
    var labels = document.querySelectorAll('label');

    articles.forEach(function(article) {
        article.classList.toggle('light-mode');
    });

    legends.forEach(function(legend) {
        legend.classList.toggle('light-mode');
    });

    labels.forEach(function(label) {
        label.classList.toggle('light-mode');
    });
}

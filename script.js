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

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search');
    const article = document.getElementById('article');
    const originalContent = article.innerHTML;

    searchInput.addEventListener('input', function (e) {
        const value = e.target.value.trim();

        if (value === "") {
            article.innerHTML = originalContent;
            return;
        }

        highlightText(article, originalContent, value);
    });
});

function highlightText(element, content, searchText) {
    const escapedSearchText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearchText})`, 'gi');

    function processNodes(node) {
        if (node.nodeType === 3) {
            const text = node.nodeValue;
            const spannedText = text.replace(regex, '<span class="search-highlight">$1</span>');
            const tempElement = document.createElement('div');
            tempElement.innerHTML = spannedText;
            while (tempElement.firstChild) {
                node.parentNode.insertBefore(tempElement.firstChild, node);
            }
            node.parentNode.removeChild(node);
        } else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
            for (let i = 0; i < node.childNodes.length; i++) {
                processNodes(node.childNodes[i]);
            }
        }
    }

    element.innerHTML = content;
    processNodes(element);
}

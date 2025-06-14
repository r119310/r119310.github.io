function homeLink() {
    window.location.href = './home.html';
}

function profileLink() {
    window.location.href = './profile.html';
}

function newsLink() {
    window.location.href = './news.html';
}

function JPLink() {
    var currentUrl = window.location.href
    var urlParts = currentUrl.split('/');
    urlParts[urlParts.length - 2] = 'JP'; 
    var newUrl = urlParts.join('/');
    window.location.href = newUrl;
}

function ENLink() {
    var currentUrl = window.location.href
    var urlParts = currentUrl.split('/');
    urlParts[urlParts.length - 2] = 'EN'; 
    var newUrl = urlParts.join('/');
    window.location.href = newUrl;
}

function Mac020kLink() {
    window.open("", '_blank')
}

function industEikenLink(){
    window.open("https://www.kobe-kosen.ac.jp/dayori/2019/dayori201907.html#190722kougyoueiken", '_blank')
}

function twitterLink() {
    window.open("https://twitter.com/mac020k", '_blank')
}

function githubLink() {
    window.open("https://github.com/r119310", '_blank')
}

function SAIHPLink() {
    window.open("https://sai.ac/", '_blank')
}

function SAIMakotoLink() {
    window.open("https://sai.ac/project?mode=author&q=%E5%A4%A7%E5%A1%9A", '_blank')
}

function Thesis2023Link() {
    window.open("https://sai.ac/project/Thesis2023_otsuka", '_blank')
}

function Interaction2024Link() {
    window.open("https://sai.ac/project/Interaction2024_otsuka", '_blank')
}

function Interaction2024ItmediaLink() {
    window.open("https://www.itmedia.co.jp/news/articles/2403/27/news062.html", '_blank')
}
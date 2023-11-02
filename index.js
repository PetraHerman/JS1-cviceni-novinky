const bodyElement = document.querySelector("body")
const bodyNews = document.querySelector (".news")
const nadpis1 = document.querySelector ("h1")
const mainPost = document.querySelector ("#zprava1")
const obrazek3 = document.querySelector ("#zprava3 img")

bodyElement.style.backgroundColor = "#e9e9e9"
bodyNews.style.backgroundColor = "white"
bodyNews.style.width = "60rem"
nadpis1.classList.add("news__title")
nadpis1.textContent = ("Aktuální novinky")
mainPost.classList.add("post--main")
obrazek3.src = "images/zprava3-novy.jpg"
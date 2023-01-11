// let slideIndex = 1
// showSlides(slideIndex)

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n)
// }

// // Thumbnail image controls
// function curentSlide(n) {
//     showSlides(slideIndex = n)
// }

// function showSlides(n) {
//     let i
//     let slides = document.getElementsByClassName("mySlides")
//     let dots = document.getElementsByClassName("dot")
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "")
//     }
//     slides[slideIndex - 1].style.display = "block"
//     dots[slideIndex - 1].className += " active"
// }

// For automatic slideshow
const seeRewardBtn = document.getElementById("seereward-btn")
// const happyBirthdayText = document.getElementById("thank-you-text")
const happyBirthdayText = document.getElementById("thank-you")

let slideIndex = 0

function showSlides() {
    let slides = document.getElementsByClassName("mySlides")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block"
    setTimeout(showSlides, 5000) // Change image every 5 seconds
}

seeRewardBtn.addEventListener("click", () => {
    seeRewardBtn.style.display = "none"
    showSlides()
    happyBirthdayText.innerHTML = `<h1>Happy Birthday Ivy <i class="fa-solid fa-cake-candles"></i></h1>`
})

// ---------- Source: w3schools ---------- //
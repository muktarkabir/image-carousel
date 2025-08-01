import "./reset.css";
import "./global-styles.css";
import images from "./modules/images.js";

const carouselFrame = document.querySelector("main");
const nextButton = document.querySelector("button.next");
const previousButton = document.querySelector("button.previous");
const navLinks = document.querySelector("aside nav");
const numberOfPictures = images.length;
let currentPictureNumber = 0;

images.forEach((image, index) => {
  const picture = document.createElement("img");
  picture.setAttribute("src", image);
  carouselFrame.append(picture);
  const span = document.createElement("div");
  span.dataset.index = index;
  navLinks.append(span);
  navLinks.childNodes[0].classList.add("active");
});

const slide = (number) => {
  const images = carouselFrame.querySelectorAll("img");
  images.forEach((image) => {
    image.style.transform = `translateX(-${number * 100}%)`;
  });
  navLinks.childNodes.forEach((link, index) => {
    if (index == number) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

nextButton.addEventListener("click", () => {
  if (currentPictureNumber < numberOfPictures - 1) {
    currentPictureNumber += 1;
    slide(currentPictureNumber);
  } else if (currentPictureNumber == numberOfPictures - 1) {
    currentPictureNumber = 0;
    slide(currentPictureNumber);
  }
});

previousButton.addEventListener("click", () => {
  if (currentPictureNumber > 0) {
    currentPictureNumber -= 1;
    slide(currentPictureNumber);
  }
});

navLinks.addEventListener("click", (e) => {
  if (e.target instanceof HTMLDivElement) {
    currentPictureNumber = Number.parseInt(e.target.dataset.index);
    slide(currentPictureNumber);
  }
});

setInterval(() => {
  if (currentPictureNumber < numberOfPictures - 1) {
    currentPictureNumber += 1;
    slide(currentPictureNumber);
  } else if (currentPictureNumber == numberOfPictures - 1) {
    currentPictureNumber = 0;
    slide(currentPictureNumber);
  }
}, 5000);

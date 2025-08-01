import "./reset.css";
import "./global-styles.css";
import images from "./modules/images.js";

const carouselFrame = document.querySelector("main");
const nextButton = document.querySelector("button.next");
const previousButton = document.querySelector("button.previous");
const numberOfPictures = images.length;
let currentPictureNumber = 0;

images.forEach((image) => {
  const picture = document.createElement("img");
  picture.setAttribute("src", image);
  carouselFrame.append(picture);
});

const slide = (number) => {
  const images = carouselFrame.querySelectorAll("img");
  images.forEach((image) => {
    image.style.transform = `translateX(-${number * 100}%)`;
  });
};

nextButton.addEventListener("click", () => {
  if (currentPictureNumber < numberOfPictures - 1) {
    currentPictureNumber += 1;
    slide(currentPictureNumber);
  }
});

previousButton.addEventListener("click", () => {
  if (currentPictureNumber > 0) {
    currentPictureNumber -= 1;
    slide(currentPictureNumber);
  }
});

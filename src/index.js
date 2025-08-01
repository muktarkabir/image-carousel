import "./reset.css";
import "./global-styles.css";
import images from "./modules/images.js";

const carouselFrame = document.querySelector("main");

images.forEach((image) => {
  const picture = document.createElement("img");
  picture.setAttribute("src", image);
  carouselFrame.append(picture);
});

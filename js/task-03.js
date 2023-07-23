const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");

const listOfImages = images
  .map(({ url, alt }) => `<li><img src=${url} alt=${alt}/></li>`)
  .join(" ");

gallery.insertAdjacentHTML("beforeend", listOfImages);

gallery.style.listStyle = "none";
gallery.style.display = "flex";
gallery.style.flexDirection = "column";
gallery.style.gap = "20px";

const prettyImages = document.querySelectorAll("img");
prettyImages.forEach((prettyImg) => {
  prettyImg.style.width = "300px";
  prettyImg.style.height = "auto";
});

const categories = document.querySelectorAll(".item");
const message = `Number of categories: ${categories.length}`;
console.log(message);

for (const category of categories) {
  console.log(`Category: ${category.querySelector("h2").textContent}`);

  console.log(`Elements: ${category.querySelectorAll("li").length}`);
}

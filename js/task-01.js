const categories = document.querySelectorAll(".item");
const message = `Number of categories: ${categories.length}`;
console.log(message);

for (const category of categories) {
  console.log(`Category: ${category.firstElementChild.textContent}`);

  console.log(`Elements: ${category.lastElementChild.children.length}`);
}

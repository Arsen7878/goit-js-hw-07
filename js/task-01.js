const amountCategoryEl = document.querySelector('#categories').children.length;
console.log(`В списке ${amountCategoryEl} категории(й).`);

const findCategoryEl = (selector, index) => {
  const categoryEl = document.querySelectorAll(selector)[index].textContent;
  return `Категория: ${categoryEl}`;
};

const amountItemEl = (selector, index) => {
  const amountEl = document.querySelectorAll(selector)[index].children.length;
  return `Количество элементов: ${amountEl}`;
};

console.log(findCategoryEl('h2', 0));
console.log(amountItemEl('.item>ul', 0));

console.log(findCategoryEl('h2', 1));
console.log(amountItemEl('.item>ul', 1));

console.log(findCategoryEl('h2', 2));
console.log(amountItemEl('.item>ul', 2));

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// const addItemInListEl = (arr, parentSelector, childTag) => {
//   const listEl = document.querySelector(parentSelector);

//   for (let i = 0; i < arr.length; i += 1) {
//     const listItemEl = document.createElement(childTag);
//     const addItemEl = listEl.appendChild(listItemEl);
//     addItemEl.textContent = arr[i];
//   }
//   return listEl;
// };

// console.log(addItemInListEl(ingredients, '#ingredients', 'li'));

// const addItemEl = ingredients.map((ingredient) => {
//   const listEl = document.querySelector('#ingredients');
//   const listItemEl = document.createElement('li');
//   const addItemEl = listEl.appendChild(listItemEl);
//   addItemEl.textContent = ingredient;

//   return listEl;
// });

const makeItemEl = (ingredients) => {
  return ingredients.map((ingredient) => {
    const listEl = document.querySelector('#ingredients');
    console.log(listEl);
    const listItemEl = document.createElement('li');
    console.log(listItemEl);
    const addItemEl = listEl.appendChild(listItemEl);
    addItemEl.textContent = ingredient;
  });
};

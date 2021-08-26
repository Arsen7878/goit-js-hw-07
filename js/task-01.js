const options = {
  amountCategoryEl: document.querySelector('#categories').children.length,
  itemsRef: document.querySelectorAll('.item'),
  listsRef: document.querySelectorAll('li ul'),
  titlesRef: document.querySelectorAll(`li h2`),
};

const { amountCategoryEl, itemsRef, listsRef, titlesRef } = options;

console.log(`В списке ${amountCategoryEl} категории(й).`);

const c = () => {
  for (let i = 0; i < itemsRef.length; i += 1) {
    const titleTextRef = titlesRef[i].textContent;
    const listLengthRef = listsRef[i].children.length;

    console.log(`Категория: ${titleTextRef}`);
    console.log(`Количество элементов: ${listLengthRef}`);
  }
};

c();

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const addImgEl = (tagChild, tag) => {
//   const listEL = document.querySelector('#gallery');

//   for (let i = 0; i < images.length; i += 1) {
//     const b = document.createElement(tagChild);
//     const e = listEL.appendChild(b);
//     const d = document.createElement(tag);
//     d.src = images[i].url;
//     d.alt = images[i].alt;
//     d.width = '320';
//     const c = b.appendChild(d);
//   }
//   return listEL;
// };
// console.log(addImgEl('li', 'img'));
// const listEL = document.querySelector('#gallery');
// listEL.insertAdjacentHTML('beforeend', '<li class = "item">');
// const a = document.querySelector('.item');
// a.insertAdjacentHTML(
//   'beforeend',
//   '<img src ="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="White and Black Long Fur Cat" width =320>'
// );
// console.log(listEL);

// const addImgEl = (array, selector) => {
//   const listEL = document.querySelector(selector);

//   for (let i = 0; i < array.length; i += 1) {
//     listEL.insertAdjacentHTML('beforeend', '<li class = "item">');
//     const listItemEl = document.querySelectorAll('.item');
//     listItemEl[i].insertAdjacentHTML(
//       'beforeend',
//       `<img src ="${array[i].url}" alt="${array[i].alt}" width = 320>`
//     );
//   }
//   return listEL;
// };
// const result = addImgEl(images, '#gallery');

// console.log(result);
// const a = document.querySelector('#gallery');

// console.log(a);
// const listEl = document.querySelector('#gallery');

// const addImageEl = images.map((image, index, array) => {
//   listEl.insertAdjacentHTML('beforeend', '<li class = "item">');
//   const listItemEl = document.querySelectorAll('.item');
//   listItemEl[index].insertAdjacentHTML(
//     'beforeend',
//     `<img src ="${array[index].url}" alt="${array[index].alt}" width = 320>`
//   );
// });

const galleryRef = document.querySelector('#gallery');

const makeImageRef = (images) => {
  return images.map((image) => {
    const itemGalleryRef = document.createElement('li');

    itemGalleryRef.insertAdjacentHTML(
      'beforeend',
      `<img src =${image.url} alt=${image.alt} width = 320 class= images>`
    );
    return itemGalleryRef;
  });
};

galleryRef.append(...makeImageRef(images));

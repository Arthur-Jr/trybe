const body = document.querySelector('body');
const container = document.querySelector('.container');
const cartItems = document.querySelector('.cart__items');
const total = document.querySelector('.total-price');
const clearButton = document.querySelector('.empty-cart');
const loader = document.querySelector('.loading');
const storageKey = 'ShoppingCart';
const storagePriceKey = 'Price';
let totalPrice = 0;

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id, title, thumbnail }) {
  const itemsSection = document.querySelector('.items');
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  itemsSection.appendChild(section);
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

// Subtrai do preço total o preço do item que foi clicado.
function subPrice(price) {
  if (total.innerText > 0) {
    totalPrice -= price;
    total.innerText = Math.round(totalPrice * 100) / 100;
  }
}

// Salva o innerHTML d0 .cart__items no localStorage.
async function saveCart() {
  localStorage.setItem(storageKey, cartItems.innerHTML);
  localStorage.setItem(storagePriceKey, totalPrice);
}

function cartItemClickListener(e) {
  if (e.target.classList.contains('cart__item')) {
    const targetPrice = parseFloat(e.target.id);
    subPrice(targetPrice);
    e.target.remove();
    saveCart();
    // Aprendi sobre o remove neste link:
    // https://www.w3schools.com/jsref/met_element_remove.asp
  }
}

function createCartItemElement({ id, title, price }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.id = price;
  cartItems.appendChild(li);
}

// Faz o request de uma api, pega dados especificos da response, e usa cada um deles como parâmetro para outra function.
async function fetchApi() {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    const json = await response.json();
    const { results } = json;
    results.forEach((result) => {
      createProductItemElement(result);
    });
  } catch (err) {
    alert(err);
  } 
}

// Soma os preços dos produtos que estão no cart.
function sumCartPrice({ price }) {
  totalPrice += price;
  total.innerText = Math.round(totalPrice * 100) / 100;
}

// Quando o botão "Adicionar ao carrinho é clicado", a function pega o id do produto e faz o request na api, e usa os dados do response como parâmetro para outra function.
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('item__add')) {
    const product = e.target.parentNode.firstChild.innerText;

    fetch(`https://api.mercadolibre.com/items/${product}`)
      .then((response) => response.json())
      .then((json) => {
        createCartItemElement(json);
        sumCartPrice(json);
        saveCart();
      })
      .catch((err) => alert(err));
  }
});

// Checa se tem algo salvo no localStorage, se tiver os dados são carregados para a página.
function loadStorage() {
  const storageCheck = localStorage.getItem(storageKey);
  const storagePriceCheck = localStorage.getItem(storagePriceKey);
  if (storageCheck !== undefined) {
    cartItems.innerHTML = storageCheck;
  }
  total.innerText = Math.round(storagePriceCheck * 100) / 100;
  totalPrice = Math.round(storagePriceCheck * 100) / 100;
}

// Quando o botão for clicado limpa o car e o valor total.
clearButton.addEventListener('click', () => {
  cartItems.innerHTML = '';
  totalPrice = 0;
  total.innerText = totalPrice;
  localStorage.removeItem(storageKey);
  localStorage.setItem(storagePriceKey, 0);
});

// Function para interagir com o load.
function displayLoad() {
  loader.innerText = 'Loading';
  loader.classList.add('display');
  setTimeout(() => {
    body.removeChild(loader);
    container.classList.add('display');
  }, 1000);
  // Peguei a base de como fazer loading, neste link:
  // https://dev.to/vaishnavme/displaying-loading-animation-on-fetch-api-calls-1e5m
}

// click event para remover um item da lista ao clica-lo.
document.addEventListener('click', cartItemClickListener);

window.onload = () => {
  displayLoad();
  fetchApi();
  loadStorage();
};

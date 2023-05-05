const baseURL = "https://api.noroff.dev/api/v1/rainy-days/"

const productGrid = document.querySelector('.product-grid');
const productId = new URLSearchParams(window.location.search).get('id');


export async function fetchProduct() {

 

   fetch(baseURL)
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');

      const productImage = document.createElement('img');
      productImage.classList.add('product-image');
      productImage.src = product.image;
      productImage.alt = product.title;

      const productTitle = document.createElement('h2');
      productTitle.classList.add('product-title');
      productTitle.textContent = product.title;

      const productPrice = document.createElement('p');
      productPrice.classList.add('product-price');
      productPrice.textContent = `£${product.price.toFixed(2)}`;

      productItem.appendChild(productImage);
      productItem.appendChild(productTitle);
      productItem.appendChild(productPrice);
      productGrid.appendChild(productItem);
    });
  })
  .catch(error => console.log(error));
  
  
  
}

productGrid.addEventListener('click', event => {
  const productClicked = event.target.closest('.product-item');
  if (productClicked) {

    window.location.href = `product.html?id=${productId}`;
    }

});

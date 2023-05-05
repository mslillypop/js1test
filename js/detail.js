const baseURL = "https://api.noroff.dev/api/v1/rainy-days/";


const productPage = document.querySelector('.product-page');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

console.log(id)

//const idURL = baseURL + id ;

export async function fetchProductDetail() {

   try {
      const response = await fetch(baseURL);
       const products = await response.json();
      fetchProductDetail.innerHTML = "";

  }
    catch(error) {
       console.log(error);
       productPage.innerHTML = `<p>"Something went wrong"</p> ;`
    }

fetchProductDetail();

function createHtml(products) {
   productPage.innerHTML = `<h1>${products.name}</h1>
                              <div class="product-image" 
                                   style="background-image: url('${products.image}')"></div>
                               <div class="products-description">${products.description}</div>
                               <time class="price"> £ ${products.price}</time>`;
}    
    
};






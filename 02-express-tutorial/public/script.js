const btn = document.querySelector("#btn");
const showProducts = document.querySelector("#products");

btn.addEventListener("click", async (e) => {
  showProducts.innerHTML = "";
  const response = await fetch("/api/v1/products");
  const data = await response.json();
  console.log(data);
  // add product
  const productsList = data
    .map(
      (p) => `
      <div>
        <img src='${p.image}' alt='${p.name}'>
        <h2>${p.name}</h2>
        <p>${p.price}</p>
        <p>${p.desc}</p>
      </div>`
    )
    .join("");
  showProducts.innerHTML = productsList;
});

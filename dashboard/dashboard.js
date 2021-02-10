const description = document.getElementById("product-description");
const image = document.getElementById("product-img");
const pname = document.getElementById("product-title");
const price = document.getElementById("product-price");

function renderDashboardProduct(doc) {
    image.src = doc.data().product_image;
    pname.innerHTML += doc.data().product_name;
    description.innerHTML += doc.data().product_desc;
}


db_product.collection("posting").where('product_color', '==', 'Black').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderDashboardProduct(doc);
    });
});
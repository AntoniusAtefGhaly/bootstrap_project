const productList=document.getElementById("product-details");

//create element and render product
function renderProduct(doc){   
    let li=document.createElement("li");
    let image=document.createElement("img");
    let color=document.createElement("div");
    let size=document.createElement("div");
    let price=document.createElement("div");
    // let madeIn=document.createElement("div");
    let sellerID=document.createElement("div");
    let description=document.createElement("div");
    // let brand=document.createElement("div");
    // let gender=document.createElement("div");

    li.setAttribute("data-id", doc.id);
    image.src=doc.data().image;
    image.width=300;
    image.height=400;
    color.textContent=doc.data().color;
    size.textContent=doc.data().size;
    price.textContent=doc.data().price;
    // madeIn.textContent=doc.data().madeIn;
    sellerID.textContent=doc.data().sellerID;
    description.textContent=doc.data().description;
    // brand.textContent=doc.data().brand;
    // gender.textContent=doc.data().gender;

    li.appendChild(image);
    li.innerHTML="Color: ";
    li.appendChild(color);
    li.innerHTML="Size: ";
    li.appendChild(size);
    li.innerHTML="Price: ";
    li.appendChild(price);
    // li.appendChild(brand);
    // li.appendChild(gender);
    // li.appendChild(madeIn);
    li.innerHTML="Seller ID: ";
    li.appendChild(sellerID);
    // li.innerHTML="Description: ";
    // li.appendChild(description);
    productList.appendChild(li);
}

//getting data
db.collection("Products").where('color','==','red').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
       renderProduct(doc); 
    });
});

const productList = document.getElementById("product-details");

const image = document.getElementById("img");
const name = document.getElementById("name");
const color = document.getElementById("color");
const price = document.getElementById("price");
const seller = document.getElementById("sellerName");
const description = document.getElementById("desc");
const category = document.getElementById("cat");
const productType = document.getElementById("pType");
const type = document.getElementById("type");
const offerSection = document.getElementById("offerSection");

// function renderProduct(doc){
//     image.src=doc.data().image;
//     color.innerHTML+=doc.data().color;
//     size.innerHTML+=doc.data().size;
//     price.innerHTML+=doc.data().price;
//     sellerID.innerHTML+=doc.data().sellerID;
//     description.innerHTML+=doc.data().description;  
//     type.innerHTML+=doc.data().processType;  
// }

function renderProduct(doc) {
    image.src = doc.data().product_image;
    name.innerHTML += doc.data().product_name;
    color.innerHTML += doc.data().product_color;
    price.innerHTML += doc.data().product_price;
    seller.innerHTML += doc.data().product_user;
    description.innerHTML += doc.data().product_desc;
    category.innerHTML += doc.data().product_category;
    productType.innerHTML += doc.data().product_type;
    // type.innerHTML += doc.data().process_type;
}

function getOfferType(doc) {
    // debugger;
    var pArr = doc.data().process_type;
    for (let p = 0; p < pArr.length; p++) {
        var b = document.createElement("button");
        b.className = "btn btn-dark";
        if (pArr[p] == "sell") {
            b.textContent = "Buy";
        }
        else {
            b.textContent = pArr[p];
        }
        b.value = pArr[p];
        b.id = pArr[p];
        offerSection.appendChild(b);
        if (p < pArr.length - 1) {

            offerSection.innerHTML += `&nbsp  Or &nbsp`;
        }
    }
    exchangeProduct();
}

function exchangeProduct() {
    // debugger;
    for (let i = 0; i < offerSection.querySelectorAll("button").length; i++) {
        offerSection.querySelectorAll("button")[i].onclick = function () {
            if (this.id == "exchange" || this.id=="Exchange") {
                this.setAttribute("data-toggle","modal");
                this.setAttribute("data-target","#myModal");
            }
        }
    }
}

//#region bla
//create element and render product
// function renderProduct(doc){   
//     let li=document.createElement("li");
//     let image=document.createElement("img");
//     let color=document.createElement("div");
//     let size=document.createElement("div");
//     let price=document.createElement("div");
//     // let madeIn=document.createElement("div");
//     let sellerID=document.createElement("div");
//     let description=document.createElement("div");
//     // let brand=document.createElement("div");
//     // let gender=document.createElement("div");

//     li.setAttribute("data-id", doc.id);
//     image.src=doc.data().image;
//     image.width=300;
//     image.height=400;
//     color.textContent=doc.data().color;
//     size.textContent=doc.data().size;
//     price.textContent=doc.data().price;
//     // madeIn.textContent=doc.data().madeIn;
//     sellerID.textContent=doc.data().sellerID;
//     description.textContent=doc.data().description;
//     // brand.textContent=doc.data().brand;
//     // gender.textContent=doc.data().gender;

//     li.appendChild(image);
//     // li.innerHTML="Color: ";
//     li.appendChild(color);
//     // li.innerHTML="Size: ";
//     li.appendChild(size);
//     // li.innerHTML="Price: ";
//     li.appendChild(price);
//     // li.appendChild(brand);
//     // li.appendChild(gender);
//     // li.appendChild(madeIn);
//     // li.innerHTML="Seller ID: ";
//     li.appendChild(sellerID);
//     // li.innerHTML="Description: ";
//     li.appendChild(description);
//     productList.appendChild(li);
// }
//#endregion

//getting data

db.collection("posting").where('product_color', '==', 'Black').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderProduct(doc);
        getOfferType(doc);
    });
});


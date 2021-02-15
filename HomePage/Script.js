
/*db.collection("posting").get().then((snapshot)=>{
   
  snapshot.docs.forEach( element => {
      console.log(element.data());
    
  });

})*/

const divid =document.querySelector('#postId');

//create element and render post

  db.collection('posting').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
        //console.log(doc.data());
    let div = document.createElement('div');
    let img1=document.createElement('img');
    let pName=document.createElement('span');
    
    /*let pColor=document.createElement('span');
    let pDesc =document.createElement('span');*/

    img1.setAttribute("src",doc.data().product_image);
    
    pName.innerHTML=doc.data().product_name ;
    /*pColor.innerHTML=doc.data().product_color;
    pDesc.innerHTML=doc.data().product_desc;*/

    div.setAttribute('data-id', doc.id );
    //img1.setAttribute('data-id', doc.id );
    
    
    div.appendChild(img1);
    div.appendChild(pName);
    /*
    div.appendChild(pColor);
    div.appendChild(pDesc);*/
    divid.appendChild(div);
  
    })
    
  
  }).then((u)=>{
  
      for (let i = 0; i < divid.querySelectorAll("div").length ; i++) {
        divid.querySelectorAll("div")[i].onclick = function (e) {
          if(e.target.nodeName === 'DIV')
          localStorage.setItem("ProductID",e.target.getAttribute('data-id'));
          console.log(localStorage.getItem("ProductID"));
          console.log(e.target.nodeName);
          console.log(divid.querySelectorAll("div")[i]);
           location.assign('#');
        }
      }
  })
 
 

   //-------- Category ----------
       
   var category =document.getElementById("category");

   for (let i = 0; i < category.querySelectorAll("button").length ; i++) {
    category.querySelectorAll("button")[i].onclick = function (e) {
        localStorage.setItem("categoryname",e.target.id);
         console.log(localStorage.getItem("categoryname"));
        location.assign('#');
    }
  
  }

  //--------Search----------
  // here we will save the data of the search when we click on the button
  document.getElementById("btn_search").addEventListener('click',(e)=>{
	// here I will take the data we picked or put in the search area
	var btn_value = document.getElementById('catList').value;
	console.log(btn_value);
	// here type the name of the local storage you will put the value in
	localStorage.setItem("category",btn_value);
  localStorage.getItem("category");
   location.assign('#');

});
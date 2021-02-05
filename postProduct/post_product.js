const form = document.getElementById('form_id');
localStorage.setItem("user","Monkey D Luffy");
form.product_user.value = localStorage.getItem('user');
// getting the data from the fireStore and show it in the console, "just for checking.."
db.collection('posting').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        // console.log(doc.data().product_name)
    });
})

// Posting the data we add from the form to the firestore data base at posting collection
form.addEventListener('submit',(e)=>{
    
    db.collection('posting').add({
        product_name: form.product_name.value,
        product_category: form.product_category.value,
        process_type: form.process_type.value,
        product_type: form.product_type.value,
        product_color: form.product_color.value,
        product_price: form.product_price.value,
        product_image: form.product_image.value,
        product_desc: form.product_desc.value,
        product_user: form.product_user.value

    })
});


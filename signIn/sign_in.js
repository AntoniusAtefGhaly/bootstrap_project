var form = document.getElementById("formk");

form.addEventListener('submit',(e)=>{
    e.preventDefault(); 
    var userName = document.getElementById("user").value;
    var passWord = document.getElementById("pass").value;
    var correct = false;
   
    db.collection('user').get().then((snap)=>{
        snap.docs.forEach(doc=>{
            if (userName == doc.data().user_userName && passWord == doc.data().user_password){
                correct = true;
                localStorage.setItem("user_current",doc.id);
                window.location.replace("http://localhost:5500/productDetails/Product%20Details.html")
            }
            
        })
    }).then(data=>{
        if (correct == false){
            var mss = document.getElementById("wrong");
            mss.style.display = "block";
            setTimeout(()=>{
                mss.style.display = "none";
            },5000)
        }
    })

   
});
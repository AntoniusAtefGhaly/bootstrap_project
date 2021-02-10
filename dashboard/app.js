db.collection('cafes2').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
        console.log(doc.data())
        console.log(doc.data().name)
        console.log(doc.data().city)
        console.log(doc.id)      
    })
})


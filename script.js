let body=document.createElement("body")

let bookboard=document.createElement("div");
bookboard.style.width="900px";
bookboard.style.display="flex";
bookboard.style.flexDirection="row";
bookboard.style.flexWrap="wrap";


    async function fetchData() {

        try {
          var data=await fetch("https://www.anapioficeandfire.com/api/books")
          var obj=await data.json();
          console.log(obj)
        

    obj.forEach((element) => {

    let box=document.createElement("div");
    box.style.height="420px";
    box.style.width="42%";
   
    box.style.border="1px solid purple";
   
    let p1=document.createElement("p")
    p1.innerText=element.name
    let p2=document.createElement("p")
    p2.innerText=element.isbn
    let p3=document.createElement("p")
    p3.innerText=element.numberOfPages
    let p31=document.createElement("p")
    p31.innerText=element.authors
    let p4=document.createElement("p")
    p4.innerText=element.publisher
    let p6=document.createElement("p")
    p6.innerText=element.released 
    let p7=document.createElement("p")
    p7.innerText=element.characters[0]
    let p8=document.createElement("p")
    p8.innerText=element.characters[1]
    let p9=document.createElement("p")
    p9.innerText=element.characters[2]
    let p10=document.createElement("p")
    p10.innerText=element.characters[3]
    let p11=document.createElement("p")
    p11.innerText=element.characters[4]
    let p12=document.createElement("p")
    p12.innerText=element.characters[5]

   
     box.appendChild(p1)
     box.appendChild(p2)
     box.appendChild(p3)
     box.appendChild(p31)
     box.appendChild(p4)
     box.appendChild(p6)
    box.appendChild(p7)
    box.appendChild(p8)
    box.appendChild(p9)
    box.appendChild(p10)
    box.appendChild(p11)
    box.appendChild(p12)
       
   bookboard.appendChild(box);
    })
} catch(err) {
    alert(err);
  }
  }
  
  fetchData();


document.body.appendChild(bookboard)
    

    
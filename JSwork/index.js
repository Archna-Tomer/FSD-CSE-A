// const div=document.getElementsByClassName("parent");

// div[0].innerHTML="hello archna";
// const h1=document.createElement("h1");
// h1.innerText="DOM MANIPULATION";
// div[0].appendChild(h1);
// h1.style.color="red";
// const img=document.createElement('img');
// img.src="th.jpeg";
// img.setAttribute("height","500px");
// div[0].appendChild(img);
// div[0].removeChild(h1);


// let btn=document.getElementById("btn");
// let div=document.getElementById("disp");
// function getData(){
//     console.log("Calling getData function");
//     disp.innerHTML="Clicked!!";
// }
// btn.addEventListener('click',getData);



// let promise=new Promise(
//     (resolve,reject)=>{
//         let a=Math.floor(Math.random()*200 +1);
//         console.log(a);
//         if(a>=100 && a<=200){
//             resolve("resolved!!");
//         }
//         else{
//             reject("oops!!rejected");
//         }
//     }
// );
// promise.then((msg)=>{console.log(msg)}).catch(error=>{console.log(error)});

// let pr2=new Promise(
//     (resolve,reject)=>{
//         resolve({name:"Archna",branch:"CSE"});
//     }
// );
// pr2.then((data)=>{console.log(data.name)}).catch(error=>{console.log(error)});
// const bd=document.getElementsByClassName("parent");

// const response=fetch("https://dummyjson.com/products");

// response.then(data=>{
//     console.log(data);
//     data.json().then(res=>{
//         console.log("title is"+res.products[0].title + "response id :"+res.products[0].id);
        
     

//     })

// })



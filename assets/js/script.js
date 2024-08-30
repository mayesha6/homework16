const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");
const imageId = document.getElementById("image-id");
const imgArray = ["assets/image/me.jpg","assets/image/project1.jpg", "assets/image/project2.jpg","assets/image/project3.jpg"]

let r=1;
rightBtn.addEventListener("click", ()=>{
       
    if(r<imgArray.length){
        imageId.src = imgArray[r];
        console.log(r);
        r++;
    }
    else{
        imageId.src = imgArray[0];
        r=1;
    }
})
let l=imgArray.length-1;
leftBtn.addEventListener("click", ()=>{
       
    if(l>0){
        imageId.src = imgArray[l];
        console.log(l);
        l--;
    }
    else{
        imageId.src = imgArray[0];
        l=imgArray.length-1;
    }
})

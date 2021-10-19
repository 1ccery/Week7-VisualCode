const currentimage = document.querySelector("#image")

const images = ["images/pilt1.jpeg","images/pilt2.jpeg", "images/pilt3.jpeg"]

function changeimage () {
    let randomnumber = Math.floor(Math.random()* images.length);
    console.log(randomnumber);
    currentimage.src = images[randomnumber]
}
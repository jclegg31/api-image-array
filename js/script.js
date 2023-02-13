const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () { 
    const response = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await response.json();
    //console.log(images);
    selectRandomImage(images);
}

const selectRandomImage = function (images) { 
    let randomIndex = Math.floor(Math.random() * images.length);
    //console.log(randomIndex);
    let randomImage = images[randomIndex];
    //console.log(randomImage);
    displayImage(randomImage);
};

//This function will be accepting the 
//random image object, which contains all the properties listed above.
const displayImage = function (randomImage) { 
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");

};

button.addEventListener("click", function () {
    getImage();
});


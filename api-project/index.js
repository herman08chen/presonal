const request = new Request("https://cataas.com/cat");

function getImg(){
    const image = document.getElementById("cat-img");

    fetch(request)
    .then((response) => response.blob())
    .then((blob) => {
        image.src = URL.createObjectURL(blob);
    });
}

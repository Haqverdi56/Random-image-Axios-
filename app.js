let image = document.getElementById('image');

const url = "https://dog.ceo/api/breeds/image/random"

setInterval(() => {
    axios.get(url)
    .then(res=> {
        image.src = res.data.message
        console.log(res.data.message)
    })
}, 2000);





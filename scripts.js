const fetchImage = () => {
    let imageAPIs = ["https://thatcopy.pw/catapi/rest/", "https://random.dog/woof.json", "https://randomfox.ca/floof/"];
    let factAPIs = ["https://meowfacts.herokuapp.com/", "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1", "http://api.fungenerators.com/fact/random?category=animal&subcategory=fox"]
    let randomValue = Math.floor((Math.random() * imageAPIs.length))
    // console.log('trying to access ' + imageAPIs[randomValue])
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", imageReplacer);
    oReq.open("GET", imageAPIs[randomValue])
    oReq.send()
}

function imageReplacer() {
    // console.log(JSON.parse(this.responseText)["url"] || JSON.parse(this.responseText)["image"])
    let imageTag = document.querySelector(".cuteImage")
    let image = JSON.parse(this.responseText)["url"] || JSON.parse(this.responseText)["image"];
    imageTag.src = image
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
}, false);

document.querySelector(".generatorButton").addEventListener("click", () => {
    fetchImage()
})
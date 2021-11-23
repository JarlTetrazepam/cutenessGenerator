const fetchImage = () => {
    let imageAPIs = ["https://thatcopy.pw/catapi/rest/", "https://random.dog/woof.json", "https://randomfox.ca/floof/"];
    let factAPIs = ["https://meowfacts.herokuapp.com/", "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1", "http://api.fungenerators.com/fact/random?category=animal&subcategory=fox"]
    let randomValue = Math.floor((Math.random() * imageAPIs.length))
    // console.log('trying to access ' + imageAPIs[randomValue])
    let oReqImage = new XMLHttpRequest();
    oReqImage.addEventListener("load", imageReplacer);
    oReqImage.open("GET", imageAPIs[randomValue])
    oReqImage.send()
    let oReqFacts = new XMLHttpRequest()
    oReqFacts.addEventListener("load", factReplacer)
    if (randomValue === 1) { // 1 being the index for a dog picture
        oReqFacts.open("GET", randomizedDogFactAPI())
    } else {
        oReqFacts.open("GET", factAPIs[randomValue])
    }
    oReqFacts.send()
}

function randomizedDogFactAPI() {
    let randomFactID = Math.random() * 434 //number of facts available in dataset
    return "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=" + randomFactID.toString()
}

function factReplacer() {
    let factText = document.querySelector(".factText")
    let text = JSON.parse(this.responseText).data["0"] || JSON.parse(this.responseText)["0"].fact
    factText.innerHTML = text.toString()
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
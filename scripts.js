const fetchImage = () => {
    let APIs = ["https://thatcopy.pw/catapi/rest/", "https://random.dog/woof.json", "https://randomfox.ca/floof/"];
    let randomValue = Math.floor((Math.random() * APIs.length))
    console.log('trying to access ' + APIs[randomValue])
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", imageReplacer);
    oReq.open("GET", APIs[randomValue])
    oReq.send()
}

function imageReplacer() {
    console.log(JSON.parse(this.responseText)["url"] || JSON.parse(this.responseText)["image"])
    let imageTag = document.querySelector(".cuteImage")
    let image = JSON.parse(this.responseText)["url"] || JSON.parse(this.responseText)["image"];
    imageTag.src = image
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
}, false);

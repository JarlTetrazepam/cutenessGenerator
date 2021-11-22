const fetchImage = () => {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", imageReplacer);
    oReq.open("GET", "https://thatcopy.pw/catapi/rest/")
    oReq.send()
}

function imageReplacer() {
    let imageTag = document.querySelector(".cuteImage")
    let image = this.responseText.split('"')[5];
    imageTag.src = image
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
}, false);

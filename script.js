const buttons = ["one", "two", "three", "four"]
let ignore = document.getElementsByClassName("ignore")
let image = document.getElementsByClassName("images")

import data from "./data.json" with { type: "json"}

for (let i = 0; i < buttons.length; i++) {
    document.getElementById(buttons[i]).addEventListener("mouseover", function() {
        document.getElementById("centre").style.marginTop = "-60vh";
        let box = document.getElementById("box")
        box.style.borderColor = "var(--" + buttons[i] + ")"
        box.style.borderWidth = "3px"
        box.style.height = "50vh"
        for (let j = 0; j < image.length; j++) {
            image[j].style.opacity = "1.0"
        }
        const dataSlice = data[document.getElementById(buttons[i]).textContent]
        Object.entries(dataSlice["Images"]).forEach(([key, value]) => {
            let classImages = document.getElementsByClassName(key)
            for (let k = 0; k < classImages.length; k++) {
                classImages[k].src = value
            }
        })
        for (let j = 0; j < buttons.length; j++) {
            let button = document.getElementById(buttons[j])
            button.style.color = "var(--" + buttons[j] + ")"
            button.style.backgroundColor = "var(--white)"
        }
        let button = document.getElementById(buttons[i])
        button.style.backgroundColor = "var(--" + buttons[i] + ")"
        button.style.color = "var(--white)"
    })
}

for (let i = 0; i < ignore.length; i++) {
    ignore[i].addEventListener("mouseover", function() {
        let box = document.getElementById("box")
        box.style.height = "0"
        box.style.borderWidth = "0"
        box.style.borderColor = ""
        document.getElementById("centre").style.marginTop = "-5vh"
        for (let j = 0; j < image.length; j++) {
            image[j].style.opacity = "0.0"
        }
        for (let j = 0; j < buttons.length; j++) {
            let button = document.getElementById(buttons[j])
            button.style.color = "var(--" + buttons[j] + ")"
            button.style.backgroundColor = "var(--white)"
        }
    })
}

let loops = 8
let width = 1500 - window.innerWidth;
if (width > 0) {
    loops = Math.floor(8 * (width / 100))
}

let imageBox = document.getElementById("images")
let imageKeys = ["1", "2", "3", "4"]
let k = 0
for (let i = 0; i < loops; i++) {
    let imageItem = document.createElement("img")
    imageItem.classList.add("img-" + imageKeys[k])
    k += 1
    if (k === 4) { k = 0 }
    imageBox.appendChild(imageItem)
}

let reverseBox = document.getElementById("reverse")
let reverseKeys = ["4", "3", "2", "1"]
let j = 0
for (let i = 0; i < loops; i++) {
    let imageItem = document.createElement("img")
    imageItem.classList.add("img-" + reverseKeys[j])
    j += 1
    if (j === 4) { j = 0 }
    reverseBox.appendChild(imageItem)
}


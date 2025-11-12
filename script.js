const buttons =["one", "two", "three", "four"]
let ignore = document.getElementsByClassName("ignore")
let image = document.getElementsByClassName("images")

for (let i = 0; i < buttons.length; i++) {
    document.getElementById(buttons[i]).addEventListener("mouseover", function() {
        document.getElementById("centre").style.marginTop = "-60vh";
        let box = document.getElementById("box")
        box.style.borderColor = "var(--" + buttons[i] + ")"
        box.style.borderWidth = "3px"
        box.style.height = "500px"
        for (let j = 0; j < image.length; j++) {
            image[j].style.opacity = "1.0"
        }
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
    })
}

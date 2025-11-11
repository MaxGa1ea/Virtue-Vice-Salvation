const buttons =["one", "two", "three", "four"]
let ignore = document.getElementsByClassName("ignore")

for (let i = 0; i < buttons.length; i++) {
    document.getElementById(buttons[i]).addEventListener("mouseover", function() {
        document.getElementById("centre").style.marginTop = "-60vh";
        let box = document.getElementById("box")
        box.style.borderColor = "var(--" + buttons[i] + ")"
        box.style.borderWidth = "3px"
        box.style.height = "500px"
        for (let j = 0; j < ignore.length; j++) {
            while (ignore[j].lastChild) {
                ignore[j].removeChild(ignore[j].firstChild)
            }
            for (let k = 0; k < 5; k++) {
                let image = document.createElement("img")
                image.src = "Untitled.png"
                if (j === 1) { image.style.float = "right"} else { image.style.float = "left" }
                ignore[j].appendChild(image)
            }
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
        for (let j = 0; j < ignore.length; j++) {
            while (ignore[j].lastChild) {
                ignore[j].removeChild(ignore[j].firstChild)
            }
        }
    })
}

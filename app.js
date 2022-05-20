// todo: add logic

const slides = document.querySelectorAll(".slide");

function activation(event) {
    for (i = 0; i < slides.length; i++) {
        slides[i].className = "slide"
    };
    event.target.className += " active";
}

const EventFunction = (res) => {
    res.onclick = () => activation(event);
}

slides.forEach(EventFunction);
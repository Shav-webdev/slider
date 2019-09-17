const container = document.getElementById("container");

const prevBtn = document.createElement("button");
prevBtn.setAttribute("id", "prev_btn");

const prevBtnIcon = document.createElement("i");
prevBtnIcon.setAttribute("class", "fas fa-arrow-left");

const imgContainer = document.createElement("div");
imgContainer.setAttribute("class", "img_container");

const nextBtn = document.createElement("button");
nextBtn.setAttribute("id", "next_btn");

const nextBtnIcon = document.createElement("i");
nextBtnIcon.setAttribute("class", "fas fa-arrow-right");

const playBtn = document.createElement("button");
playBtn.setAttribute("id", "play_btn");

const pauseBtn = document.createElement("button");
pauseBtn.setAttribute("id", "pause_btn");

const playBtnIcon = document.createElement("i");
playBtnIcon.setAttribute("class", "fas fa-play");

const pauseBtnIcon = document.createElement("i");
pauseBtnIcon.setAttribute("class", "fas fa-pause");

const playPauseContainer = document.createElement("div");
playPauseContainer.setAttribute("id", "play-pause-block");

playBtn.appendChild(playBtnIcon);
pauseBtn.appendChild(pauseBtnIcon);

const imageSrcArr = [
    "pic1.png",
    "pic2.png",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.png",
    "pic6.jpg",
    "pic7.jpg",
    "pic8.jpg",
    "pic9.png",
    "pic10.jpg",
    "pic11.jpg",
    "pic12.jpg",
];

const sliderImg = document.createElement("img");
let currentImgIndex = 0;
sliderImg.setAttribute("src", imageSrcArr[currentImgIndex]);
sliderImg.setAttribute("alt", `img-${0}`);
sliderImg.style.width = "100%";

window.onload = function () {
    createSliderSection();
};

function createSliderSection() {
    container.appendChild(playBtn);
    container.appendChild(pauseBtn);
    pauseBtn.style.display = "none";

    prevBtn.appendChild(prevBtnIcon);
    container.appendChild(prevBtn);

    prevBtn.style.display = "none";
    nextBtn.appendChild(nextBtnIcon);
    container.appendChild(nextBtn);

    container.appendChild(imgContainer);
    imgContainer.appendChild(sliderImg);
}

prevBtn.addEventListener("click", function () {
    nextBtn.style.display = "inline-block";
    --currentImgIndex;
    sliderImg.setAttribute("src", imageSrcArr[currentImgIndex]);
    if (currentImgIndex === 0) {
        this.style.display = "none";
    }
});
nextBtn.addEventListener("click", function () {
    prevBtn.style.display = "inline-block";
    ++currentImgIndex;
    sliderImg.setAttribute("src", imageSrcArr[currentImgIndex]);
    if (currentImgIndex === imageSrcArr.length - 1) {
        this.style.display = "none"
    }
});

let timerId;

playBtn.addEventListener("click", autoPlay);

function autoPlay() {
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";

    timerId = setInterval(() => {
        sliderImg.setAttribute("src", imageSrcArr[currentImgIndex]);
        ++currentImgIndex;
        if (currentImgIndex === imageSrcArr.length){
            currentImgIndex =0;
            clearInterval(timerId);
            pauseBtn.style.display = "none";
            playBtn.style.display = "inline-block";
            prevBtn.style.display = "inline-block";
            autoPlay();
        }
    }, 1500);
}

pauseBtn.addEventListener("click", stopAutoPlay );

function stopAutoPlay() {
    checkPrevNextButtons();
    playBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    setTimeout(() => clearInterval(timerId), 0);
}

function checkPrevNextButtons() {
    if (currentImgIndex !== 0){
        prevBtn.style.display = "inline-block";
    }else {
        prevBtn.style.display = "none";
    }
    if (currentImgIndex !== imageSrcArr.length){
        nextBtn.style.display = "inline-block";
    }else {
        nextBtn.style.display = "none";
    }
}


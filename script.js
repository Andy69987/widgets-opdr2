
let stopwatchInterval;
let stopwatchRunning = false;
let elapsedTime = 0;

function toggleStopwatch() {
    if (stopwatchRunning) {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
    } else {
        const startTime = Date.now() - elapsedTime;
        stopwatchInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById("stopwatch").textContent = formatTime(elapsedTime);
        }, 100);
        stopwatchRunning = true;
    }
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    elapsedTime = 0;
    document.getElementById("stopwatch").textContent = "00:00:00";
}

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let milliseconds = Math.floor((ms % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}


const fontSlider = document.getElementById("fontSlider");
const sliderValue = document.getElementById("sliderValue");

fontSlider.oninput = function () {
    let size = this.value;
    sliderValue.textContent = size + "px";
    document.body.style.fontSize = size + "px";
};


const dynamicData = [
    {
        image: "1.png",
        text: "Dit is afbeelding 1 met dynamische tekst!"
    },
    {
        image: "images.jpg",
        text: "Dit is afbeelding 2 met dynamische tekst!"
    }
];

function loadDynamicContent() {
    const imgElement = document.getElementById("dynamicImg");
    const textElement = document.getElementById("dynamicText");
    const randomIndex = Math.floor(Math.random() * dynamicData.length);
    
    imgElement.src = dynamicData[randomIndex].image;
    textElement.textContent = dynamicData[randomIndex].text;
}

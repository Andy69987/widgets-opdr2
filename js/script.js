document.addEventListener("DOMContentLoaded", function() {
    
    let stopwatchInterval;
    let stopwatchRunning = false;
    let elapsedTime = 0;
    
    const stopwatchElement = document.getElementById("stopwatch");
    const startStopBtn = document.getElementById("startStopBtn");
    const resetBtn = document.getElementById("resetBtn");

    startStopBtn.addEventListener("click", toggleStopwatch);
    resetBtn.addEventListener("click", resetStopwatch);

    function toggleStopwatch() {
        if (stopwatchRunning) {
            clearInterval(stopwatchInterval);
            stopwatchRunning = false;
        } else {
            const startTime = Date.now() - elapsedTime;
            stopwatchInterval = setInterval(() => {
                elapsedTime = Date.now() - startTime;
                stopwatchElement.textContent = formatTime(elapsedTime);
            }, 100);
            stopwatchRunning = true;
        }
    }

    function resetStopwatch() {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
        elapsedTime = 0;
        stopwatchElement.textContent = "00:00:00";
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

    fontSlider.addEventListener("input", function () {
        let size = this.value + "rem";
        document.documentElement.style.setProperty("--base-font-size", size);
        sliderValue.textContent = size;
    });

    
    const imgElement = document.getElementById("dynamicImg");
    const textElement = document.getElementById("dynamicText");
    const loadContentBtn = document.getElementById("loadContentBtn");

    loadContentBtn.addEventListener("click", function() {
        imgElement.src = "img/image.jpg"; 
        textElement.textContent = "Dit is de enige afbeelding die wordt geladen.";
    });
});

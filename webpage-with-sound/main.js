// TODO: Edit this furder

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('playSoundButton').addEventListener('click', function () {
        const trollBody = document.getElementById("troll_body");
        trollBody.style.display = "grid";
        trollBody.style.padding = "30px";
        trollBody.style.visibility = "visible";

        const video = document.getElementById("video");
        video.currentTime = 0;
        video.play();
    });
});

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("StopSoundNOWbutton").addEventListener('click', function () {

        // NOTE: edit this too
        document.getElementById("troll_body").setAttribute("style", "display: grid; padding: 30px; visibility: hidden")
        video.pause();
        video.currentTime = 0.0;

    });    
});


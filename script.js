async function goFullScreen() {
    await document.documentElement.requestFullscreen();
}

async function unlock() {
    await goFullScreen();
    await screen.orientation.unlock();
}

async function lockPortrait(){
    await goFullScreen();
    await screen.orientation.lock('portrait');
}

async function lockLandscape(){
    await goFullScreen();
    await screen.orientation.lock('landscape');
}

const { type, angle } = screen.orientation
function show(event) {
   console.log("Orientation type is " + screen.orientation.type);
   console.log("Orientation angle is " + screen.orientation.angle);
   console.log("Event Type is " + event.type)
}

screen.orientation.addEventListener("change", show);
window.onload = show;

function ready(){
    console.log("Now full screen and ready to start, locked to " + screen.orientation.type);
}

function start() {
    document.onfullscreenchange = async () => {
        await screen.orientation.lock('landscape');
        ready();
  }
    document.documentElement.requestFullscreen();
}
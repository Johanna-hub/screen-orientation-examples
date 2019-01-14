function unlock() {
    document.documentElement.requestFullscreen();
    screen.orientation.unlock();
}

function lockPortrait(){
    document.documentElement.requestFullscreen();
    screen.orientation.lock('portrait');
}

function lockLandscape(){
    document.documentElement.requestFullscreen();
    screen.orientation.lock('landscape');
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
    document.documentElement.requestFullscreen();
    document.onfullscreenchange = async () => {
        await screen.orientation.lock('natural');
        ready();
  }
}
function unlock() {
    document.documentElement.requestFullscreen();
    screen.orientation.unlock();
    console.log("Screen unlocked to" + screen.orientation.type);
}

const { type, angle } = screen.orientation
function show(event) {
   console.log("Orientation type is " + screen.orientation.type);
   console.log("Orientation angle is " + screen.orientation.angle);
   console.log("Event Type is " + event.type)
}

screen.orientation.addEventListener("change", show);
window.onload = show;

  var start = function() {
    document.onfullscreenchange = function() {
      screen.orientation.lock('natural').then(startInternal);
    }
    document.documentElement.requestFullscreen();
  }


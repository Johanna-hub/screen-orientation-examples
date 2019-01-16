// async function goFullScreen() {
//     if(document.fullscreenElement === null) {
//         await document.documentElement.requestFullscreen();
//     } 
// }

// async function unlock() {
//     await goFullScreen();
//     await screen.orientation.unlock();
// }

// async function lockPortrait(){
//     await goFullScreen();
//     await screen.orientation.lock('portrait');
// }

// async function lockLandscape(){
//     await goFullScreen();
//     await screen.orientation.lock('landscape');
// }

// const { type, angle } = screen.orientation
// function show(event) {
//    console.log("Orientation type is " + screen.orientation.type);
//    console.log("Orientation angle is " + screen.orientation.angle);
//    console.log("Event Type is " + event.type)
// }

// screen.orientation.addEventListener("change", show);
// window.onload = show;

// function ready(){
//     console.log("Now full screen and ready to start, locked to " + screen.orientation.type);
// }

// async function start() {
//     const promiseToFullScreen = new Promise(resolve =>
//       document.addEventListener("fullscreenchange", resolve)
//     );
//     await document.documentElement.requestFullscreen();
//     await promiseToFullScreen;
//     await screen.orientation.lock('landscape');
//     ready();
//   }

function manualRotation() {
    alert("Thank you for rotating!");
  }
  
  function orientationChangeHandler() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        console.log(window.matchMedia("(orientation: portrait)"))
      return;
    }
    window.removeEventListener("orientationchange", orientationChangeHandler);
    manualRotation();
  }
  
  async function start() {
    try {
      await screen.orientation.lock("landscape");
    } catch {
      window.addEventListener("orientationchange", orientationChangeHandler);
      alert("To start, please rotate your screen to landscape");
    }
  }
  
  function thanks() {
    alert("Rotated");
    window.removeEventListener("orientationchange", orientationChangeHandler);
  }
  
  function rotate() {
    window.addEventListener("orientationchange", thanks);
  }

// function goFullScreen() {
//   if (document.fullscreenElement) return;
//   return document.documentElement.requestFullscreen();
// }

// // async function lockPortrait() {
// //   await goFullScreen();
// //   await screen.orientation.lock("portrait");
// // }

// // async function lockLandscape() {
// //   await goFullScreen();
// //   await screen.orientation.lock("landscape");
// // }

// function show(event) {
//   const { type, angle } = screen.orientation;
//   console.log(`Orientation type is ${type} + angle is ${angle}.`);
//   console.log("Event Type is " + event.type);
// }

// function oppOrientation() {
//   const { type } = screen.orientation;
//   if (type.startsWith("portrait")) {
//     return "landscape";
//   }
//   return "portrait";
// }
// const rotateButton = document.getElementById("rotateButton");

// function btnOrientation() {
//   const btnOrientation = oppOrientation();
//   rotateButton.textContent = `Lock to ${btnOrientation}`;
// }

// async function rotate() {
//   try {
//     await goFullScreen();
//   } catch (err) {
//     console.error(err);
//   }
//   const newOrientation = oppOrientation();
//   await screen.orientation.lock(newOrientation);
//   btnOrientation();
// }

// btnOrientation();
// screen.orientation.addEventListener("change", btnOrientation);
// screen.orientation.addEventListener("change", show);
// window.addEventListener("load", show);

// function ready() {
//   console.log(
//     "Now full screen and ready to start, locked to " + screen.orientation.type
//   );
// }

// async function start() {
//   const promiseToFullScreen = new Promise(resolve =>
//     document.addEventListener("fullscreenchange", resolve)
//   );
//   await document.documentElement.requestFullscreen();
//   await promiseToFullScreen;
//   await screen.orientation.lock("landscape");
//   ready();
// }

// function manualRotation() {
//   alert("Thank you for rotating!");
// }

// function final() {
//   alert("thanks for turning");
// }
// async function start2() {
//   try {
//     await screen.orientation.lock("landscape");
//     final();
//   } catch (err) {
//     console.error(err);
//   }
//   const matchLandscape = matchMedia("(orientation: landscape)");
//   if (matchLandscape.matches) return final();
//   addEventListener("orientationchange", function listener() {
//     matchLandscape.addListener(function mediaChange(e) {
//       if (!e.matches) return; // Nope, not landscape!
//       removeEventListener("orientationchange", listener);
//       matchLandscape.removeListener(mediaChange);
//       final();
//     });
//   });
//   alert("To start, please rotate your screen to landscape.");
// }

function fullScreenCheck() {
  if (document.fullscreenElement) return;
  return document.documentElement.requestFullscreen();
}

const lockButton = document.getElementById("lockBtn");

function btnOrientation() {
  const btnOrientation = oppOrientation();
  lockButton.textContent = `Lock to ${btnOrientation}`;
}

function oppOrientation() {
  const { type } = screen.orientation;
  if (type.startsWith("portrait")) {
    return "landscape";
  }
  return "portrait";
}

async function rotate() {
  const rotateBtn = document.getElementById("rotateBtn");
  try {
    await fullScreenCheck();
  } catch (err) {
    console.error(err);
  }
  const newOrientation = oppOrientation();
  await screen.orientation.lock(newOrientation);
  btnOrientation();
}

function show() {
  const { type, angle } = screen.orientation;
  console.log(`Orientation type is ${type} & angle is ${angle}.`);
}

screen.orientation.addEventListener("change", show);
screen.orientation.addEventListener("change", btnOrientation);
window.addEventListener("load", show);
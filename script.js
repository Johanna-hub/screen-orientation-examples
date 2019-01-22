async function goFullScreen() {
  if (document.fullscreenElement === null) {
    await document.documentElement.requestFullscreen();
  }
}

async function unlock() {
  await goFullScreen();
  await screen.orientation.unlock();
}

async function lockPortrait() {
  await goFullScreen();
  await screen.orientation.lock("portrait");
}

async function lockLandscape() {
  await goFullScreen();
  await screen.orientation.lock("landscape");
}

function show(event) {
  const { type, angle } = screen.orientation;
  console.log(`Orientation type is ${type} + angle is ${angle}`);
  console.log("Event Type is " + event.type);
}

screen.orientation.addEventListener("change", show);
window.onload = show;

async function rotate() {
  const rotate = document.getElementById("rotate");
  await goFullScreen();
  const newOrientation = screen.orientation.type.startsWith("portrait")
    ? "landscape"
    : "portrait";
  console.log(`New Orientation is ${newOrientation}`);
  await screen.orientation.lock(newOrientation);
  rotate.textContent = `Rotate to ${newOrientation}`;
}

function ready() {
  console.log(
    "Now full screen and ready to start, locked to " + screen.orientation.type
  );
}

async function start() {
  const promiseToFullScreen = new Promise(resolve =>
    document.addEventListener("fullscreenchange", resolve)
  );
  await document.documentElement.requestFullscreen();
  await promiseToFullScreen;
  await screen.orientation.lock("landscape");
  ready();
}

function manualRotation() {
  alert("Thank you for rotating!");
}

function final() {
  alert("thanks for turning");
}
async function start2() {
  try {
    await screen.orientation.lock("landscape");
    final();
  } catch (err) {
    console.error(err);
  }
  const matchLandscape = matchMedia("(orientation: landscape)");
  if (matchLandscape.matches) return final(); 
  addEventListener("orientationchange", function listener() {
    matchLandscape.addListener(function mediaChange(e) {
      if (!e.matches) return; // Nope, not landscape!
      removeEventListener("orientationchange", listener);
      matchLandscape.removeListener(mediaChange);
      final();
    });
  });
  alert("To start, please rotate your screen to landscape.");
}
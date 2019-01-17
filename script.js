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

const rotateButton = document.getElementById("rotateButton");
const newOrientation = screen.orientation.type.startsWith("portrait")
    ? "landscape"
    : "portrait";
rotateButton.textContent = `Rotate to ${newOrientation}`;

async function rotate() {
  await goFullScreen();
  await screen.orientation.lock(newOrientation);
  rotateButton.textContent = `Rotate to ${newOrientation}`;
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

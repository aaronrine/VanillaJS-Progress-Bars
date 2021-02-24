function updateStyles(el, styles) {
  Object.keys(styles).forEach((style) => (el.style[style] = styles[style]));
}

function fillProgressBar(progressBar, styles) {
  const current = getCurrentPercent(progressBar);
  const fillBar = progressBar.querySelector(".fillbar")
    ? progressBar.querySelector(".fillbar")
    : document.createElement("div");
  fillBar.classList.add("fillbar");
  updateStyles(fillBar, styles);
  fillBar.innerHTML = current;
  progressBar.appendChild(fillBar);
}

function getCurrentPercent(progressBar) {
  let current = progressBar.dataset.current;
  current = Math.max(current, 0);
  current = Math.min(current, 100);
  return `${current}%`;
}

function render(progressBar) {
  const current = getCurrentPercent(progressBar);

  const styles = {
    background: "#22aed1",
    color: "#fff",
    borderRadius: "50px",
    boxShadow: "inset 5px -5px 20px #33bfe2, 0 0 20px #33bfe2",
    fontSize: "1.5em",
    display: "flex",
  };

  if (progressBar.classList.contains("vertical")) {
    const updates = {
      ...styles,
      height: current,
      width: "auto",
      fontSize: "1.2em",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: "10px",
    };
    fillProgressBar(progressBar, updates);
  } else if (progressBar.classList.contains("horizontal")) {
    const updates = {
      ...styles,
      width: current,
      height: "auto",
      justifyContent: "flex-end",
      paddingRight: "10px",
    };
    fillProgressBar(progressBar, updates);
  } else if (progressBar.classList.contains("curved")) {
    const percentage = progressBar.dataset.current;
    const degrees = (percentage / 100) * 360;
    const updates = {
      ...styles,
      height: "7em",
      width: "7em",
      borderRadius: "14em",
      display: "grid",
      placeItems: "center",
      background:
        percentage < 50
          ? `linear-gradient(0deg, #1d1e18 50%, transparent 50%, transparent), linear-gradient(${degrees}deg, #22aed1 50%, #1d1e18 50%, #1d1e18 )`
          : `linear-gradient(${degrees}deg, #22aed1 50%, transparent 50%, transparent), linear-gradient(180deg, #22aed1 50%, #1d1e18 50%, #1d1e18)`,
    };
    fillProgressBar(progressBar, updates);
  }
}

if (window.addEventListener) {
  //normal browsers
  window.addEventListener("load", WindowLoad, false);
} else if (window.attachEvent) {
  //IE
  window.attachEvent("onload", WindowLoad);
}

function WindowLoad(event) {
  document
    .querySelectorAll(".progressbar")
    .forEach((progressbar) => render(progressbar));
}

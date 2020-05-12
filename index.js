newFunction();
function newFunction() {
  const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];
  const refs = {
    bodyLink: document.querySelector("body"),
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
  };

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const timer = {
    isActive: false,
    start() {
      if (this.isActive) {
        return;
      }
      this.isActive = true;
      timerId = null;

      timerId = setInterval(() => {
        refs.bodyLink.style.cssText = `background-color: ${
          colors[randomIntegerFromInterval(0, colors.length - 1)]
        }`;
      }, 1000);
    },

    stop() {
      if ((this.isActive = true)) {
        clearInterval(timerId);
      }
      this.isActive = false;
      return;
    },
  };

  refs.startBtn.addEventListener("click", timer.start.bind(timer));
  refs.stopBtn.addEventListener("click", timer.stop.bind(timer));
}

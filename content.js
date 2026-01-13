
let showUI = false;
let inZone = false;

function hide(el) {
  if (!el) return;

  el.style.transition =
    "opacity 0.35s ease, transform 0.35s ease, height 0.35s ease, margin 0.35s ease, padding 0.35s ease";

  el.style.opacity = "0";
  el.style.transform = "translateY(-20px)";
  el.style.pointerEvents = "none";
  el.style.overflow = "hidden";
  el.style.height = "0px";
  el.style.margin = "0px";
  el.style.padding = "0px";
}

function show(el) {
  if (!el) return;

  el.style.transition =
    "opacity 0.35s ease, transform 0.35s ease, height 0.35s ease, margin 0.35s ease, padding 0.35s ease";

  el.style.opacity = "1";
  el.style.transform = "translateY(0)";
  el.style.pointerEvents = "auto";
  el.style.overflow = "";
  el.style.height = "";
  el.style.margin = "";
  el.style.padding = "";
}

const selectors = {
  googleBar: ".boqOnegoogleliteOgbOneGoogleBar",
  header: "top-bar-actions",
  spacer: ".desktop-ogb-buffer",
  input: "input-container",
  chat: "infinite-scroller.chat-history"
};

function apply() {
  const googleBar = document.querySelector(selectors.googleBar);
  const header = document.querySelector(selectors.header);
  const spacer = document.querySelector(selectors.spacer);
  const input = document.querySelector(selectors.input);
  const chat = document.querySelector(selectors.chat);

  if (showUI) {
    show(googleBar);
    show(header);
    show(input);

    if (spacer) spacer.style.display = "";
    if (chat) chat.style.paddingBottom = "";
  } else {
    hide(googleBar);
    hide(header);
    hide(input);

    if (spacer) {
      spacer.style.display = "none";
      spacer.style.height = "0";
      spacer.style.margin = "0";
    }

    if (chat) {
      chat.style.paddingBottom = "0px";
      chat.style.paddingTop = "0px";
    }
  }
}

document.addEventListener("mousemove", (e) => {
  const fromTop = e.clientY;
  const fromBottom = window.innerHeight - e.clientY;

  // enter focus UI
  if (!inZone && (fromTop < 70 || fromBottom < 110)) {
    inZone = true;
    showUI = true;
  }

  // exit focus UI
  if (inZone && fromTop > 140 && fromBottom > 260) {
    inZone = false;
    showUI = false;
  }
});

function loop() {
  apply();
  requestAnimationFrame(loop);
}

setTimeout(() => {
  showUI = false;
  loop();
}, 1200);

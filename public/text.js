console.log("text.js loaded");

document.addEventListener("input", e => {
  if (!e.target) return;
  if (e.target.tagName !== "TEXTAREA") return;

  fetch("/input", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: e.target.value,
      time: Date.now()
    })
  })
  .then(r => console.log("POST /input", r.status))
  .catch(err => console.error("fetch error", err));
});

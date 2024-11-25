const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (btn.innerText === "ON") {
    document.documentElement.style.cssText = "--light-color: #0000ff"; // Blue for "ON" blinking
    btn.innerText = "OFF";

    // Set a timeout to turn the bulb yellow after 2-3 seconds
    setTimeout(() => {
      document.documentElement.style.cssText = "--light-color: #f8d11d"; // Yellow when fully ON
    }, 2500); // 2.5 seconds
  } else {
    document.documentElement.style.cssText = "--light-color: #808080"; // Grey for "OFF"
    btn.innerText = "ON";

    // Set a timeout to return to blue after 1 second (to mimic off effect)
    setTimeout(() => {
      document.documentElement.style.cssText = "--light-color: #94b0ff"; // Blue back to default
    }, 1000); // 1 second
  }
});

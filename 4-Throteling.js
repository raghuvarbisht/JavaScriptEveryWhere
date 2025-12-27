

/*
Throttling is a technique that limits the execution of a function to at most 
once in a specified time interval, regardless of how many times the event is triggered.

In other words, it ensures a function runs at a controlled rate.

🔹 Why Throttling is Used
- Improves performance for frequently fired events
- Reduces CPU usage
- Common use cases:
- Scroll events
- Window resize
- Mouse movement
- Infinite scrolling
*/

// Throttle function
function throttle(func, limit) {
  let lastRun = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastRun >= limit) {
      func.apply(this, args);
      lastRun = now;
    }
  };
}

// Function to run
function handleScroll() {
  console.log("Scroll event fired at:", new Date().toLocaleTimeString());
}

// Attach throttled function to scroll
window.addEventListener("scroll", throttle(handleScroll, 2000));

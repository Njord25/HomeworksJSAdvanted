//Is Element Inside Viewport Check
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  var windowInnerHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
  var windowInnerWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
  
  // Create offset to load images in before they enter the viewport
  var loadingZoneBottom = windowInnerHeight * 4;
  var loadingZoneRight = windowInnerWidth *  4;
   
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= loadingZoneBottom && rect.right <= loadingZoneRight
  );
};

// Change Source Function
function changeSrc(el) {
  const src = el.dataset.src;
  el.removeAttribute('data-src');
  el.src = src;
};

//Check if elements have data-src attribute
function hasDataSrcAttribute(el) {
  return el.dataset.src;
}

//Cache Elements with data-src, filter out ones that do not on function invocation, if images is populated, loop through and put data-src into src.
var lazyLoader = throttle(function() {
  console.log('firing');
  const images = [...document.querySelectorAll('img[data-src]')].filter(hasDataSrcAttribute);

  if (images.length) {
    for (const image of images) {
      if (isElementInViewport(image)) {
        changeSrc(image);
      }
    }
  }
});

//Dom Has Loaded - Load Initial Images in Viewport
document.addEventListener('DOMContentLoaded', lazyLoader);

//On Scroll, invoke lazyLoader
document.addEventListener('scroll', lazyLoader);

//On Rezise, invoke lazyLoader
window.addEventListener('resize', function() {
  lazyLoader();
});

//Throttle the function so it doesn't get invoked too frequently
function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 0);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
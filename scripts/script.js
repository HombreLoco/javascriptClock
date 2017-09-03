$("#circle").hover(function() {
  $("#text").html("Move mouse away from circle");
}, function() {
  $("#text").html("Hover over circle");
});

function convertTime12Hour(hour) {
  if (hour > 12) {
    hour = hour - 12;
  }
  return hour;
}

function setHourRotation(unitOfTimeHour, unitOfTimeMinute) {
  var minuteRotationPercentage = ((unitOfTimeMinute * 6) / 360).toFixed(2);
  var percentToAdd = 0;
  if (minuteRotationPercentage !== 0 || minuteRotationPercentage !== 1.00) {
    percentToAdd = Math.floor(30 * minuteRotationPercentage);
  }
  var rotation = ((convertTime12Hour(unitOfTimeHour) * 30) + percentToAdd);  
  return rotation;
}

function setMinuteRotation(unitOfTime) {
  var rotation = unitOfTime * 6;
  return rotation;
}

function setSecondRotation(unitOfTime) {
  var rotation = unitOfTime * 6;
  return rotation;
}

function getTimeRotations() {
  var time = new Date(Date.now());
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  return {
    hourRotation: setHourRotation(hours, minutes),
    minuteRotation: setMinuteRotation(minutes),
    secondRotation: setSecondRotation(seconds)
  }
}

function updateClock() {

  var timeRotations = getTimeRotations();

  $("#hourHand").css({
    "webkitTransform":"rotate(" + timeRotations.hourRotation + "deg)",
    "MozTransform":"rotate(" + timeRotations.hourRotation + "deg)",
    "msTransform":"rotate(" + timeRotations.hourRotation + "deg)",
    "OTransform":"rotate(" + timeRotations.hourRotation + "deg)",
    "transform":"rotate(" + timeRotations.hourRotation + "deg)"
  });
  
  $("#minuteHand").css({
    "webkitTransform":"rotate(" + timeRotations.minuteRotation + "deg)",
    "MozTransform":"rotate(" + timeRotations.minuteRotation + "deg)",
    "msTransform":"rotate(" + timeRotations.minuteRotation + "deg)",
    "OTransform":"rotate(" + timeRotations.minuteRotation + "deg)",
    "transform":"rotate(" + timeRotations.minuteRotation + "deg)"
  });
  
  $("#secondHand").css({
    "webkitTransform":"rotate(" + timeRotations.secondRotation + "deg)",
    "MozTransform":"rotate(" + timeRotations.secondRotation + "deg)",
    "msTransform":"rotate(" + timeRotations.secondRotation + "deg)",
    "OTransform":"rotate(" + timeRotations.secondRotation + "deg)",
    "transform":"rotate(" + timeRotations.secondRotation + "deg)"
  });
}

var time = setInterval(updateClock, 1000);

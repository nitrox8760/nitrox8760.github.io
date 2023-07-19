// script.js
function loadDefaultValues() {
  const config = defaultConfig;

  document.getElementById('baseFare').value = config.baseFare;
  document.getElementById('costPerMinute').value = config.costPerMinute;
  document.getElementById('costPerMile').value = config.costPerMile;
  document.getElementById('bookingFee').value = config.bookingFee;
  document.getElementById('timeOfJob').value = config.timeOfJob;
  document.getElementById('rideDistance').value = config.rideDistance;
}

document.getElementById('costCalculator').addEventListener('submit', function(event) {
  event.preventDefault();

  const baseFare = parseFloat(document.getElementById('baseFare').value);
  const costPerMinute = parseFloat(document.getElementById('costPerMinute').value);
  const costPerMile = parseFloat(document.getElementById('costPerMile').value);
  const bookingFee = parseFloat(document.getElementById('bookingFee').value);
  const timeOfJob = parseFloat(document.getElementById('timeOfJob').value);
  const rideDistance = parseFloat(document.getElementById('rideDistance').value);

  const fare = baseFare + (costPerMinute * timeOfJob) + (costPerMile * rideDistance) + bookingFee;
  
  document.getElementById('result').textContent = `$${fare.toFixed(2)}`;
});

// Load default values when the page loads
loadDefaultValues();
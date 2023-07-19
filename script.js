function formatCurrency(value) {
  return `£${value.toFixed(2)}`;
}

function loadDefaultValues() {
  const config = {
    baseFare: 5.0,
    costPerMinute: 0.2,
    costPerMile: 1.0,
    bookingFee: 1.5,
    timeOfJob: 30,
    rideDistance: 5,
  };

  document.getElementById('baseFare').value = formatCurrency(config.baseFare);
  document.getElementById('costPerMinute').value = formatCurrency(config.costPerMinute);
  document.getElementById('costPerMile').value = formatCurrency(config.costPerMile);
  document.getElementById('bookingFee').value = formatCurrency(config.bookingFee);
  document.getElementById('timeOfJob').value = config.timeOfJob;
  document.getElementById('rideDistance').value = config.rideDistance;
}

document.getElementById('costCalculator').addEventListener('submit', function(event) {
  event.preventDefault();

  const baseFare = parseFloat(document.getElementById('baseFare').value.replace(/[^\d.]/g, ''));
  const costPerMinute = parseFloat(document.getElementById('costPerMinute').value.replace(/[^\d.]/g, ''));
  const costPerMile = parseFloat(document.getElementById('costPerMile').value.replace(/[^\d.]/g, ''));
  const bookingFee = parseFloat(document.getElementById('bookingFee').value.replace(/[^\d.]/g, ''));
  const timeOfJob = parseFloat(document.getElementById('timeOfJob').value);
  const rideDistance = parseFloat(document.getElementById('rideDistance').value.replace(/[^\d.]/g, ''));

  const fare = baseFare + (costPerMinute * timeOfJob) + (costPerMile * rideDistance) + bookingFee;
  
  document.getElementById('result').textContent = formatCurrency(fare);
});

// Load default values when the page loads
loadDefaultValues();

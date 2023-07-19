function formatCurrency(value) {
  return `£${value.toFixed(2)}`;
}

function parseCurrency(value) {
  return parseFloat(value.replace(/[^\d.]/g, '')) || 0;
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
  document.getElementById('rideDistance').value = formatCurrency(config.rideDistance);
}

document.getElementById('costCalculator').addEventListener('submit', function(event) {
  event.preventDefault();

  const baseFare = parseCurrency(document.getElementById('baseFare').value);
  const costPerMinute = parseCurrency(document.getElementById('costPerMinute').value);
  const costPerMile = parseCurrency(document.getElementById('costPerMile').value);
  const bookingFee = parseCurrency(document.getElementById('bookingFee').value);
  const timeOfJob = parseFloat(document.getElementById('timeOfJob').value);
  const rideDistance = parseCurrency(document.getElementById('rideDistance').value);

  const fare = baseFare + (costPerMinute * timeOfJob) + (costPerMile * rideDistance) + bookingFee;

  document.getElementById('result').textContent = formatCurrency(fare);
}

// Load default values when the page loads
loadDefaultValues();

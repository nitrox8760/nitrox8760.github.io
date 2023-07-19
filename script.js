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

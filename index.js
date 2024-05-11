/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityInKmh = 10000; // velocity (km/h)
const accelerationInMs2 = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const distanceInKm = 0; // distance (km)
const remainingFuelInKg = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)
const timeInHours = 1 // hours (1 hour)
const accelerationInKmh = accelerationInMs2 * 3.6 // converts (m/s^2) to (km/h)


// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (accelerationInKmh, velocityInKmh, timeInSeconds) => {
  if(isNaN(
    accelerationInKmh, velocityInKmh, timeInSeconds)
  ) {
    throw new Error (
      "Error. Values can only be numbers"
    )
  }
  return velocityInKmh + (accelerationInKmh * timeInSeconds)
}

//calculates new velocity based on acceleration
const calculatedVelocity = calcNewVel(
  accelerationInKmh, 
  velocityInKmh, 
  timeInSeconds
); 
console.log(`Corrected New Velocity: ${calculatedVelocity} km/h`);

//calcultes new distance
const calculatedDistance = distanceInKm + (velocityInKmh * timeInHours); 
console.log(`Corrected New Distance: ${calculatedDistance} km`);

//calculates remaining fuel
const calculatedRemainingFuel = remainingFuelInKg - fuelBurnRate * timeInSeconds 
console.log(`Corrected Remaining Fuel: ${calculatedRemainingFuel} kg`);

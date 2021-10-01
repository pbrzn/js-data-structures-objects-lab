// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const object = {...driver};
  object[key] = value;
  return object;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const object = {...driver};
  delete object[key];
  return object;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}

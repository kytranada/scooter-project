class Scooter {
  // scooter code here
  static nextSerial = 1;
  user = null;
  serial = Scooter.nextSerial++;
  charge = 100;
  isBroken = false;

  constructor(station) {
    this.station = station;
  }
}

module.exports = Scooter;

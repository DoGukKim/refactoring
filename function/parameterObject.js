const station = {
  name: "ZB1",
  reading: [
    { temp: 45, time: "2016-11-10 09:10" },
    { temp: 70, time: "2016-11-10 09:10" },
    { temp: 80, time: "2016-11-10 09:10" },
    { temp: 100, time: "2016-11-10 09:10" },
  ],
};

const readingOutsideRange = (station, min, max) => {
  return station.reading.filter((r) => r.temp < min || r.temp > max);
};

alert = readingOutsideRange(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

////////////////////////

class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }

  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
}

const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

const otherReadingOutsideRange = (station, range) => {
  return station.reading.filter(
    (r) => r.temp < range.min || r.temp > range.max
  );
};

alert = readingOutsideRange(station);

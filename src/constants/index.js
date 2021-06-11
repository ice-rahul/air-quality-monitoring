const AQI_LEVEL = [
  {
    name: 'Good',
    min: 0,
    max: 50,
    className: 'badge-good',
  },
  {
    name: 'Satisfactory',
    min: 51,
    max: 100,
    className: 'badge-satisfactory',
  },
  {
    name: 'Moderate',
    min: 101,
    max: 200,
    className: 'badge-moderate',
  },
  {
    name: 'Poor',
    min: 201,
    max: 300,
    className: 'badge-poor',
  },
  {
    name: 'Very Poor',
    min: 301,
    max: 400,
    className: 'badge-very-poor',
  },
  {
    name: 'Severe',
    min: 401,
    max: 500,
    className: 'badge-severe',
  },
];

export default AQI_LEVEL;

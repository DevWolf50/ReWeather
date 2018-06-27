const key = 'b714ec74bbab5650795063cb0fdf5fbe';

const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily';

const getWeather = async (city) => {
  const response = await fetch(`${apiUrl}?q=${city}&type=accurate&cnt=5&APPID=${key}`);

  return response.json();
};

export default getWeather;

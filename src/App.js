const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setWeatherData(null);

  try {
    const response = await axios.get(`https://khkrzcu935.execute-api.ap-southeast-2.amazonaws.com/dev/weather/${city}`);
    setWeatherData(response.data);
  } catch (err) {
    console.error(err);
    setError(`Error fetching weather data: ${err.message}`);
  }
};

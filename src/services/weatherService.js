export const fetchWeatherByCityAPI = async (searchTerm, apiKey, thunkAPI) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return thunkAPI.rejectWithValue(data.message);
    }

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

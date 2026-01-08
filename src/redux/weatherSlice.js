import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWeatherByCityAPI } from "../services/weatherService";

export const fetchWeatherByCity = createAsyncThunk(
  "weather/fetchWeatherData",
  async ({ searchTerm, apiKey }, thunkAPI) => {
    return await fetchWeatherByCityAPI(searchTerm, apiKey, thunkAPI);
  }
);

const weatherSlice = createSlice({
  name: "weatherDataCollector",
  initialState: {
    weather: {
      city: "Chandigarh",
      temp: "15 °C",
      weatherDescription: "Heavy Smog",
      windSpeed: "3 km/s",
      humidity: "30%",
    },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherByCity.fulfilled, (state, action) => {
        state.loading = false;
        state.weather.city = action.payload.name;
        state.weather.temp = `${action.payload.main.temp} °C`;
        state.weather.weatherDescription =
          action.payload.weather[0].description;
        state.weather.windSpeed = `${action.payload.wind.speed} km/s`;
        state.weather.humidity = `${action.payload.main.humidity}%`;
      })
      .addCase(fetchWeatherByCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default weatherSlice.reducer;

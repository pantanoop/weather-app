import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchWeatherByCity = createAsyncThunk(
  'weather/ddWeatherData',
  async (payload, thunkAPI) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${payload.searchTerm}&appid=${payload.apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
)


const weatherSlice = createSlice({
  name: "weatherDataCollector",
  initialState: {
   weather:{
    city:"Chandigarh",
    temp:"15 Celcius",
    weatherDescription:"Heavy Smog",
    windSpeed:"3km/s",
    humidity:"30%",
   },
   loading:false,
   error:"null",
  //   weather:{
  //   city:"",
  //   temp:"",
  //   weatherDescription:"",
  //   windSpeed:"",
  //   humidity:"",
  //  }
  },
  reducers: {
    
  },
   extraReducers: (builder) => {
    builder.addCase(fetchWeatherByCity.pending, (state) => {

        state.loading = true;
        state.error = null;
      })
    .addCase(fetchWeatherByCity.fulfilled, (state, action) => {
   state.weather.city = action.payload.name;
        state.weather.temp = action.payload.main.temp;
        state.weather.weatherDescription = action.payload.weather[0].description;
        state.weather.windSpeed = action.payload.wind.speed;
        state.weather.humidity=action.payload.main.humidity;
    })
    .addCase(fetchWeatherByCity.rejected, (state, action) => {console.log("jkfvjgcgjc",action.payload);
        state.loading = false;
        state.error = action.error.message;

      });
  },
});





export default weatherSlice.reducer;
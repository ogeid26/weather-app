  const FETCH_OPTIONS = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e9f7b24137msh68abc1f210c4b2cp1eb71cjsn16d64da84b6c",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
    }
  }

  export async function getWeatherFrom(query='Buenos Aires'){
    const response = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
        FETCH_OPTIONS)
    const data = await response.json()

      const { location, current } = data
      const { country, localtime, name } = location
      const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir} = current
      const { code, text } = condition

    return {
        conditionCode: code,
        conditionText: text,
        country,
        localtime,
        locationName: name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir
    };
  }
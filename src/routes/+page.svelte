<script>
  const url =
    "https://weatherapi-com.p.rapidapi.com/current.json?q=Buenos%20Aires";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e9f7b24137msh68abc1f210c4b2cp1eb71cjsn16d64da84b6c",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const weatherPromise = fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      const { location, current } = response
      const { country, localtime, name } = location
      const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir} = current
      const { code, text } = condition

    return {
        conditionCode: code,
        conditionText: text,
        country,
        localtime,
        name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir
    }
    });

    
</script>

{#await weatherPromise then weather }
<h1> {weather.conditionText}</h1>
{/await}

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<style>
  h1 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
</style>

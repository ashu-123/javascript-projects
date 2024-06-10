function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Decorator function
function retry(target, context) {
  console.log("Applying retry decorator");

  const resultMethod = async function(...args) {
    console.log('@retry - Running the retry decorator');
    const maxRetryAttempts = 3;
    let lastError;

    for(let attemptNum=1;attemptNum<=maxRetryAttempts;attemptNum++) {
      try {
        console.log(`@retry - Attempt #${attemptNum}`);
        return await target.apply(this, args);

      }
      catch(err) {
        lastError = err;
        if(attemptNum<maxRetryAttempts) {
          console.log('@retry - Retrying..');
          await sleep(500);
        }
      }
    }

    throw lastError;
  }

  return resultMethod;
}
class WeatherAPI {
  apiVersion = 'v1'

  @retry
  async getWeather(city) {
    console.log(`Getting weather for ${city}`)

    if (Math.random() < 0.75) throw new Error('Something went wrong')
    return {
      apiVersion: this.apiVersion,
      temperature: 20,
      humidity: 80,
      city: city,
    }
  }
}

async function main() {
  const weatherAPI = new WeatherAPI()
  console.log(await weatherAPI.getWeather('London'))
  console.log(await weatherAPI.getWeather('Dublin'))
}

main().catch(console.error)
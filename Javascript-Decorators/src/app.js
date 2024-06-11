function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Decorator function
function retry(retryOptions) {
  return function (target, context) {
    console.log("Applying retry decorator");

    const resultMethod = async function (...args) {
      console.log('@retry - Running the retry decorator');
      let lastError;

      for (let attemptNum = 1; attemptNum <= retryOptions.maxRetryAttempts; attemptNum++) {
        try {
          console.log(`@retry - Attempt #${attemptNum}`);
          return await target.apply(this, args);

        }
        catch (err) {
          lastError = err;
          if (attemptNum < retryOptions.maxRetryAttempts) {
            console.log('@retry - Retrying..');
            await sleep(retryOptions.delay);
          }
        }
      }

      throw lastError;
    }
    return resultMethod;
  }
}

function log(target, context) {
  const resultMethod = async function(...args) {
    console.log(`@log - Running the ${context.name} method`);
    try {
      return await target.apply(this, args);
    }
    finally {
      console.log(`@log - Method ${context.name} finished`);
    }
  }
  return resultMethod;
}
class WeatherAPI {
  apiVersion = 'v1'

  @retry({ maxRetryAttempts: 4, delay: 2000 })
  @log
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
export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "3725de975dmsh93cdcde644f95cbp1794f7jsnecb78838db69",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com"
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}

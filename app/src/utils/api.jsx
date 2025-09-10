
const API_KEY = "TCE3KF3XDMP3MUU6VX3LT2AGY";
const BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

export const fetchQueryWeather = async (location, startDate = "today", endDate = "next7days") => {
    if (!location) {
        throw new Error(`Invalid query: ${location}`);
    }

    try {
        const response = await fetch(`${BASE_URL}/${location}/${startDate}/${endDate}?key=${API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Failed to retrieve weather data for query: ${query}`);
    }
}
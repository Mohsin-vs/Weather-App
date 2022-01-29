import { baseUrl } from "../../constants/baseUrl";

export const GET_Weather_Detail = async (cityName) => {
    try {
        const api = `${baseUrl}=${cityName}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
    catch (e) {
        return (e)
    }
};



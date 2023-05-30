export const kelvinToCelsius = (tempk) => {
    return `${(tempk - 273.15).toFixed(1)}°C`
}

export const kelvinToFahrenheit = (tempk) => {
    return `${((tempk - 273.15) * (9/5) + 32).toFixed(1)}°F`
}

export const getRandom = (elements) => {
    const randomIndex = Math.floor(Math.random() * elements.length);
    return elements[randomIndex]
};
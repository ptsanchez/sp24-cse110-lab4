for (const property in statistics) {
    if (property.startsWith('r') || statistics[property] % 2 != 0) {
        console.log(statistics[property]);
    }
}
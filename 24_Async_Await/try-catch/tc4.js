async function fetchGoogleData(url) {
    let response;

    try {
        response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Data fetched successfully:', data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    } finally {
        console.log('Fetch attempt finished.');
    }
}

fetchGoogleData("https://dummyjson.com/recipes");
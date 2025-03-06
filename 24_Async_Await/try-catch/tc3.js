async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        let data = await response.json();
        console.log("Data fetched successfully:", data);
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    } finally {
        console.log("Fetch attempt finished.");
    }
}

// Example usage
fetchData("https://dummyjson.com/users");

export async function getAllStarships() {
    try {
      const response = await fetch("https://swapi.dev/api/starships/");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
const loadInsult = async (): Promise<string | undefined> => {
  try {
    const response = await fetch("http://localhost:8080/api/insult");
    const body = await response.text();
    return body;
  } catch (error) {
    console.error(error);
  }
};

export default loadInsult;

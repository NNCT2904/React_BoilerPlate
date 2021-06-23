import { promises } from "dns";

const loadInsult = async (): Promise<string | undefined> => {
  try {
    const respone = await fetch("http://localhost:8080/api");
    const body = await respone.text();
    return body;
  } catch (error) {
    console.error(error);
  }
};

export default loadInsult;

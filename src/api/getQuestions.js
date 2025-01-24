import axios from "axios";

async function getQuestions() {
  try {
    const response = await axios.get(
      "https://restcountries.com/v3.1/all"
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export default getQuestions;

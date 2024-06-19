import { User } from "../domain/model/User";

const BASE_URL = "https://www.react-query-mocks.com";

export async function fetchUserById(id: number): Promise<User> {
  const result = await fetch(`${BASE_URL}/api/Users/${id}`);
  if (result.status === 200) {
    const finalResult = result.json();
    return finalResult;
  }
  throw new Error("STATUS: " + result.status);
}

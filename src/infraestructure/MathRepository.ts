const BASE_URL = 'https://www.react-query-mocks.com';

export async function fetchCuadrado(num: number): Promise<{ cuadrado: number }> {
  const bodyTxt = JSON.stringify({ num });
  const options = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: bodyTxt,
  };
  const response = await fetch(`${BASE_URL}/api/cuadrado`, options);
  return response.json() as Promise<{ cuadrado: number }>;

}

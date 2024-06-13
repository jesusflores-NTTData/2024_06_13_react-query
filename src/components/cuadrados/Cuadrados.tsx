import { useQueries } from "@tanstack/react-query"
import { fetchCuadrado } from "../../infraestructure/MathRepository";

const valores = [4, 5, 6];
export function Cuadrados() {

  const { data, isFetching } = useQueries({
    queries: valores.map((valor) => ({
      queryKey: ['cuadrado', valor],
      queryFn: async () => fetchCuadrado(valor)
    })),
    combine: (results) => ({
      data: results.map((resultado) => resultado.data),
      isFetching: results.some((resultado) => resultado.isFetching)
    })
  })
  if (isFetching) {
    return <div>Calculando</div>;
  }

  return <ul>
    {data.map((item) => <li key={item?.cuadrado}>{item?.cuadrado}</li>)}
  </ul>
}
import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  //   console.log(`Fetching movies: ${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

// 하나의 데이터만을 fetching하는 server component를 만듦
// await해서 데이터를 fetch함
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}

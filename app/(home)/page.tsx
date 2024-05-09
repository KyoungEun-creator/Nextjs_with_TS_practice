export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // 백엔드로부터의 전달을 일부러 늦추기 위한 장치
  await new Promise((resolve) => setTimeout(resolve, 10000));

  const response = await fetch(URL);
  const json = await response.json();
  return json;
}
export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}

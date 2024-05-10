import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  //   console.log(`Fetching videos: ${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

// 하나의 데이터만을 fetching하는 server component를 만듦
// await해서 데이터를 fetch함
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}

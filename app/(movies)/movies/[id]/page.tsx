import React from "react";
import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

// { params: { id } }: { params: { id: string } }
// { searchParams: { region } }: { searchParams: { region: string } }

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  console.log("start fetching");
  // Parallel Requests: 두 개의 data fetching을 동시에(평행적으로) 진행하기 위한 Promise.all
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end fetching");

  return (
    <>
      <h1>{movie.title}</h1>
      {videos.map((video) => (
        <li key={movie.id}>{video.name}</li>
      ))}
    </>
  );
}

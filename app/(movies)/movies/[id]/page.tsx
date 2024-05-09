import React from "react";
import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

// { params: { id } }: { params: { id: string } }
// { searchParams: { region } }: { searchParams: { region: string } }

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  const movie = await getMovie(id);
  console.log(movie);
  return <h1>{movie.title}</h1>;
}

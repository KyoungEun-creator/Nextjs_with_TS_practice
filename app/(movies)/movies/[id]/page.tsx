import React from "react";

export default function MovieDetail({ params: { id } }: { params: { id: string } }) {
  return <h1>Movie {id}</h1>;
}

// { params: { id } }: { params: { id: string } }
// { searchParams: { region } }: { searchParams: { region: string } }

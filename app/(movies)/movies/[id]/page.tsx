import React, { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// import해온 server component를 각각 Suspense component로 감쌈
// Suspense component가 데이터를 fetch하기 위해 안에 있는 server component를 await함
// fetchg하는 중에는 Suspense 내 fallback 부분을 render함
// (fallback이 loading 페이지의 필요성을 대체함)

// 두 개의 데이터가 동시에 병렬적으로 fetch되는데
// 하나의 요청이 완료되면 즉시 component가 render된다.
// (둘다 끝나기를 기다리지 않음)

// then, 현재 있는 전체 페이지가 '즉시' 로드 되고
// (로드되는 동안 loading 페이지를 render 하지 않음)
// 데이터가 준비되면 사용자는 바로 데이터를 받는다.

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

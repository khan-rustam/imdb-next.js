import Results from '@/components/Results';

const API_URL = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'fetchTopRated' ? 'movie/top_rated' : '/trending/all/week'
    }?api_key=${API_URL}&language=hi-IN&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error(' Something went wrong!');
  }
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}

import { useMemo } from "react";
import { useFilmsQuery } from "../../graphql/generated";

function HomePage() {
  const { data, loading } = useFilmsQuery({
    fetchPolicy: "no-cache",
  });

  const films = useMemo(() => data?.allFilms?.films, [data]);

  return (
    <div style={{ height: "100vh", width: "100vw", background: "white" }}>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {films?.map((film) => (
            <li key={film?.title}>
              {film?.title}
              {film?.director}
              {film?.releaseDate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;

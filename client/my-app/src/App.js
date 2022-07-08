import "./App.css";
import { gql, useQuery } from "@apollo/client";

const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(TRACKS);

  if (error) {
    return <div>{error.message}</div>;
  }

  return loading ? (
    <span>Loading...</span>
  ) : (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data?.tracksForHome?.map((track) => (
        <div
          key={track.id}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px black solid",
            padding: "8px 16px",
            margin: "8px",
            width: "300px",
          }}
        >
          <img
            src={track.thumbnail}
            alt={track.author.name}
            width={200}
            height={150}
          />
          <span>{track.id}</span>
          <span>{track.title}</span>
          <span>
            {`length: ${track.length} - module count: ${track.modulesCount}`}
          </span>
          <span>{track.author.name}</span>
        </div>
      ))}
    </div>
  );
}

export default App;

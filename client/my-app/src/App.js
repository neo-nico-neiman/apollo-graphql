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

  return loading ? (
    <span>Loading...</span>
  ) : (
    <div className="App">
      {data?.tracksForHome?.map((track) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={track.thumbnail}
            alt={track.author.name}
            width={200}
            height={20}
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

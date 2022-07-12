import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { Track } from "./Track";

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
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}

export default App;

import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

const GET_TRACKS = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      title
      modules {
        id
        title
        length
      }
      id
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
    }
  }
`;

const TrackPage = () => {
  const params = useParams();
  const { data, loading, error } = useQuery(GET_TRACKS, {
    variables: {
      trackId: params.id,
    },
  });
  if (error) return <p>Something went wrong</p>;

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {data?.track && (
        <>
          <h1>{data.track.author.name}</h1>
          <p>{data.track.numberOfViews}</p>
          {data.track.modules.map((module, index) => (
            <p key={index}>{module.title}</p>
          ))}
          <Link to="/">Return home</Link>
        </>
      )}
    </div>
  );
};
export default TrackPage;

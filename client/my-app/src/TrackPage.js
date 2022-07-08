import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const TRACK = gql`
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
  console.log(9);
  const params = useParams();
  const { data, loading, error } = useQuery(TRACK, { trackId: params.trackId });
  console.log({ params });

  return loading ? <p>Loading...</p> : <div>{JSON.stringify(data?.track)}</div>;
};
export default TrackPage;

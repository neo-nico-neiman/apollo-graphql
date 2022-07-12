import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

export const INCREMENT_TRACK_VIEWS = gql`
  mutation IncrementTrackViewsMutation($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code
      success
      message
      track {
        id
        numberOfViews
      }
    }
  }
`;

const Track = ({ track }) => {
  const { id, thumbnail, modulesCount, title, length, author } = track;
  const [incrementTrackViews] = useMutation(INCREMENT_TRACK_VIEWS, {
    variables: { incrementTrackViewsId: id },
    onCompleted: (data) => {
      console.log(22, data);
    },
  });
  const handleClick = () => {
    incrementTrackViews();
  };
  return (
    <Link to={`/track/${id}`} key={id} onClick={handleClick}>
      <div
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
        <img src={thumbnail} alt={author.name} width={200} height={150} />
        <span>{id}</span>
        <span>{title}</span>
        <span>{`length: ${length} - module count: ${modulesCount}`}</span>
        <span>{author.name}</span>
      </div>
    </Link>
  );
};

export { Track };

import { useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();

  return <div>Details about user {userId}</div>;
}

export default UserDetails;

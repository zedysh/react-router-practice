import { Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <h2>Users 1</h2>
      <h2>Users 2</h2>
      <h2>Users 3</h2>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filters</button>
      </div>
      {showActiveUsers ? <h2>Showing active users</h2> : <h2>All users</h2>}
    </div>
  );
}

export default Users;

import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <div>
        Products
        <input type="search" placeholder="Search product" />
      </div>

      <nav>
        <ul>
          <Link to="featured">Featured Products</Link>
          <Link to="new">New Products</Link>
        </ul>
        <Outlet />
      </nav>
    </>
  );
}

export default Products;

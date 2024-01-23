import { Outlet, Link } from "react-router-dom";

export default function Layout()
{
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/contact"></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
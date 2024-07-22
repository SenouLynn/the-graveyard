import { Link, Outlet } from "@remix-run/react";

export default function Users() {
  return (
    <div className="w-screen flex flex-row ">
      <div className=" bg-gray-200">
        <ul>
          <li>
            <Link to="list">All Users</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

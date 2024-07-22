import { Outlet } from "@remix-run/react";

export default function streams() {
  return (
    <div className="grid grid-cols-12 gap-x-5 gap-y-3 divide-y">
      <div className=" bg-gray-300 px-3 py-2 h-full col-span-3">
        <ul>
          <li>Gov</li>
        </ul>
      </div>
      <div className="col-span-9">
        <Outlet />
      </div>
    </div>
  );
}

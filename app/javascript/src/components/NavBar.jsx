import React from "react";

import { Avatar } from "@bigbinary/neetoui";
import { NavLink } from "react-router-dom";

import routes from "../route";

const NavBar = () => (
  <div className="fixed left-0 top-0 z-10 flex h-screen w-16 flex-col items-center justify-between border-r bg-white shadow-sm">
    <div className="mt-4 flex flex-col items-center space-y-4">
      <NavLink
        exact
        activeClassName="bg-blue-100 rounded-md p-1"
        to={routes.blogs}
      >
        <i className="ri-book-fill text-2xl" />
      </NavLink>
      <NavLink exact activeClassName="bg-blue-100 rounded-md p-1" to="/">
        <i className="ri-layout-row-line text-2xl" />
      </NavLink>
      <NavLink
        exact
        activeClassName="bg-blue-100 rounded-md p-1"
        to={routes.createBlog}
      >
        <i className="ri-edit-2-line text-2xl" />
      </NavLink>
    </div>
    <div className="mb-4">
      <Avatar
        user={{
          name: "Dummy",
        }}
      />
    </div>
  </div>
);

export default NavBar;

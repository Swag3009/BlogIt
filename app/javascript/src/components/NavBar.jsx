import React from "react";

import { Avatar, Button } from "@bigbinary/neetoui";

const NavBar = () => (
  <div className="fixed left-0 top-0 z-10 flex h-screen w-16 flex-col items-center justify-between border-r bg-white shadow-sm">
    <div className="mt-4 flex flex-col items-center space-y-4">
      <Button
        icon={() => <i className="ri-book-fill" />}
        iconSize={36}
        style="text"
      />
      <Button
        icon={() => <i className="ri-layout-row-line" />}
        iconSize={36}
        style="text"
      />
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

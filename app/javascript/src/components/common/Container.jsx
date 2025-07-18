import React, { useState } from "react";

import classnames from "classnames";
import { CategorySidebar } from "components/Category";
import NavBar from "components/NavBar";
import PropTypes from "prop-types";

const Container = ({ children, className = "" }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <NavBar
        isFocused={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
      />
      <div className="ml-16 flex h-screen overflow-hidden">
        <div
          className={classnames(
            "transition-all duration-300 ease-in-out",
            isSidebarOpen ? "min-w-80" : "w-0",
            "overflow-y-auto bg-gray-100"
          )}
        >
          <CategorySidebar isOpen={isSidebarOpen} />
        </div>
        <main
          className={classnames(
            "flex-1 overflow-y-auto px-6 py-6 transition-all duration-300 ease-in-out",
            className
          )}
        >
          {children}
        </main>
      </div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

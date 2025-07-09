import React from "react";

import classnames from "classnames";
import NavBar from "components/NavBar";
import PropTypes from "prop-types";

const Container = ({ children, className = "" }) => (
  <>
    <NavBar />
    <div className={classnames("px-6", [className])}>{children}</div>
  </>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

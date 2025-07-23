import React from "react";

import { Blogs, CreateBlog, ShowBlog, EditBlog } from "components/Blog";
import { PageNotFound, Container } from "components/common";
import MyBlogs from "components/MyBlogs";
import { Route, Switch, Redirect } from "react-router-dom";
import useAuthStore from "store/useAuthStore";

import routes from "../route";

const PrivateLayoutRoutes = () => {
  const isLoggedIn = useAuthStore.getState().isLoggedIn();
  if (!isLoggedIn) return <Redirect to={routes.signin} />;

  return (
    <Container>
      <Switch>
        <Route exact component={Blogs} path={routes.blogs} />
        <Route exact component={CreateBlog} path={routes.createBlog} />
        <Route exact component={ShowBlog} path={routes.showBlog} />
        <Route exact component={EditBlog} path={routes.edit} />
        <Route exact component={MyBlogs} path={routes.myBlogs} />
        <Route component={PageNotFound} path="*" />
      </Switch>
    </Container>
  );
};

export default PrivateLayoutRoutes;

import React from "react";

import { Typography } from "@bigbinary/neetoui";
import { Container, ErrorMessage, PageLoader } from "components/common";
import { useShowPost } from "hooks/reactQuery/usePostsApi";
import { useParams } from "react-router-dom";

const Show = () => {
  const { slug } = useParams();
  const {
    data: { post: { title, description } = {} } = {},
    isLoading,
    isError,
  } = useShowPost(slug);

  if (isLoading) return <PageLoader />;

  if (isError) return <ErrorMessage />;

  return (
    <Container className="space-y-6">
      <Typography style="h1">{title}</Typography>
      <Typography style="body1">{description}</Typography>
    </Container>
  );
};

export default Show;

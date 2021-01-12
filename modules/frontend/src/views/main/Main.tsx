import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { QueryResult, useQuery } from "@apollo/client";
import { GET_USER, GetUserQueryResult } from "./queries";

import CustomComponent from "../../components/CustomComponent";

const Main = (): JSX.Element => {
  const { loading, error, data }: QueryResult<GetUserQueryResult> = useQuery(
    GET_USER
  );

  console.log(data);

  return (
    <Box>
      <Heading>Template for main view</Heading>
      {data && <CustomComponent someProp={data.getUser.name} />}
    </Box>
  );
};

export default Main;

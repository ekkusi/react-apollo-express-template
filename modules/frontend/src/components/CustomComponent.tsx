import { Button } from "@chakra-ui/react";
import React from "react";

type CustomComponentProps = {
  someProp: string;
};

const CustomComponent = ({ someProp }: CustomComponentProps): JSX.Element => {
  return (
    <>
      <Button onClick={() => alert(someProp)}>Click me!</Button>
    </>
  );
};

export default CustomComponent;

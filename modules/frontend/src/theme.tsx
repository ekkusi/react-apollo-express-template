import { extendTheme, Theme } from "@chakra-ui/react";

const theme: Theme = extendTheme({
  styles: {
    global: {
      p: {
        marginBottom: "2",
      },
    },
  },
});

export default theme;

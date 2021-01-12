import { gql } from "@apollo/client";
import { User } from "@ekeukko/react-apollo-express-template-backend/lib/types/user";

export const GET_USER = gql`
  query getUser {
    getUser {
      name
    }
  }
`;

export type GetUserQueryResult = {
  getUser: User;
};

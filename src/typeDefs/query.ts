import { gql } from 'apollo-server';

const Query = gql`
  type Query {
    notes: [Note]
    note(id: String): Note
  }
`;

export default Query;

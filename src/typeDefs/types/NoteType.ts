import { gql } from 'apollo-server';

const NoteType = gql`
  type Note {
    id: ID!
    title: String
    body: String
    date: String
  }
`;

export default NoteType;

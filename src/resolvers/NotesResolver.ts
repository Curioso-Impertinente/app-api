import { Note } from '../models';

const NotesResolver = {
  Query: {
    notes: () => Note.all(),
    note: (_: any, args: any) => Note.byId(args.id),
  },
};

export default NotesResolver;

import { DataFeed } from '../data';

class Note {
  static all() {
    return DataFeed.filter((data) => data.type === 'note');
  }

  static byId(id: string) {
    const note = this.all().filter((note) => note.id === id)[0];
    console.log(note);
    return note;
  }
}

export default Note;

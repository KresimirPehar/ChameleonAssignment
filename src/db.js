import Dexie from 'dexie';

const db = new Dexie('ChameleonAssignment');
db.version(1).stores({ todoList: '++id, text, done' });

export default db;

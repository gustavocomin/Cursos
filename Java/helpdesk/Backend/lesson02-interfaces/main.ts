import { PersonDao } from './person-dao';
import { DaoInterface } from './dao.interface';
import { Person } from '../lesson01-classes/person';

let personDao : DaoInterface = new PersonDao();
let person: Person = new Person('Mario');


personDao.insert(person);
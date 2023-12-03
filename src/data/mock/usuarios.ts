import empresa from './empresa.ts';

const usuarios: UserInterface[] = [
  {
    uuid: 'x',
    created: new Date(),
    updated: undefined,
    deleted: undefined,
    company: empresa,
    username: 'leikovsk@gmail.com',
    password: '123456',
    name: 'Léo Cruz'
  },
  {
    uuid: 'y',
    created: new Date(),
    updated: undefined,
    deleted: new Date(),
    company: empresa,
    username: 'leikovsk@hotmail.com',
    password: '123456',
    name: 'Léo Costa'
  },
  {
    uuid: 'z',
    created: new Date(),
    updated: undefined,
    deleted: undefined,
    company: empresa,
    username: 'leikovsk@uol.com',
    password: '123456',
    name: 'Leonardo Cruz'
  }
]

export default usuarios

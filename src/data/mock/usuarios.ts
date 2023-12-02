import empresa from './empresa.ts';

const usuarios: UserInterface[] = [
  {
    uuid: 'x',
    created: new Date(),
    updated: undefined,
    deleted: undefined,
    company: empresa,
    username: 'leikovsk@gmail.com',
    password: '123456'
  },
  {
    uuid: 'x',
    created: new Date(),
    updated: undefined,
    deleted: undefined,
    company: empresa,
    username: 'leikovsk@hotmail.com',
    password: '123456'
  },
  {
    uuid: 'x',
    created: new Date(),
    updated: undefined,
    deleted: undefined,
    company: empresa,
    username: 'leikovsk@uol.com',
    password: '123456'
  }
]

export default usuarios

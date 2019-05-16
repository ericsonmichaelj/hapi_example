export interface IUser {
  email: string;
  name: string;
}

export interface UserService {
  getUsers(): Array<IUser>,
  getUser(user: string): IUser,
  newUser(user: IUser): IUser,
  updateUser(id: string, user: IUser): IUser,
  deleteUser(id: string): string
}  

const TYPES = {
  UserService: Symbol("UserService")
}

export default TYPES
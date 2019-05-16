import "reflect-metadata";
import { Container } from "inversify";
import TYPES, {UserService} from "./constants/types";
import { UserServiceImpl } from './service/user';

var container = new Container();
container.bind<UserService>(TYPES.UserService).to(UserServiceImpl)

export default container;
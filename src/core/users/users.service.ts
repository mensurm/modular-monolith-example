import { User } from "./user";
import { sendEmail } from "src/shared/external-communication";

class UserService {
  
  getUserById(id: number) {
    // here you would typically fetch the user from a database
    return new User(id, "user", "user@example.com");
  }

  createUser(name: string, email: string) {
    sendEmail(email, "Welcome!", `Hello ${name}, welcome to our service!`);
    // here you would typically save the user to a database
    return new User(2, name, email);
  }
}

export const userService = new UserService();



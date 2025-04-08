import { userService } from '@core/users';

class MLService {
  invokeModel(userId: number) {
    const user = userService.getUserById(userId);
    return `Model output for ${user.getName()}`;
  }
}

export const mlService = new MLService();

// the imports below should trigger the linter error
// import { userService } from "@core/users"; 
// import { mlService } from "@modules/ml"; 

export function sendEmail(to: string, subject: string, body: string) {
  // userService.getUserById(1); // Example usage of userService
  console.log(`Sending Email to ${to}: ${subject} - ${body}`);
}

// This is our common module for external communication services.
// For example we want our users service to be able to send emails for new registered users.
// Our our ml module to send emails for some of its functionality.

export {sendSMS} from './sms.service';
export {sendEmail} from './email.service';

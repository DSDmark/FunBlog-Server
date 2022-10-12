import { Twilio } from "twilio";
const smsNo = process.env['SMS_NO']
const authToken = process.env['SMS_TOKEN']
const accountSid = process.env['SMS_SID']
const client = new Twilio(`${accountSid}`, `${authToken}`);

export const sendSms = async (to: string, body: string, txt: string) => {
	try {
		client.messages
			.create({
				body: `blogServices ${body} - ${txt}`,
				from: smsNo,
				to,
			})
			.then(message => console.log(message.sid));

	} catch (error) {
		console.log(error);
	}
}

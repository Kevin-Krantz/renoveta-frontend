import http from "./httpService";

interface IMessage {
  subject: string;
  adminResponse: string;
}

export async function sendEmail({ subject, adminResponse }: IMessage) {
  const { data } = await http.post("http://localhost:8000/api/sendemail", {
    subject,
    adminResponse,
  });
  return data;
}

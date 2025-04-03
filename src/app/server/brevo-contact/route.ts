import SibApiV3Sdk from "sib-api-v3-typescript";

export async function POST(req: Request) {
  const apiKey = process.env.NEXT_BREVO_CONTACT_KEY!;

  const apiInstance = new SibApiV3Sdk.ContactsApi();
  apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, apiKey);

  const { email } = await req.json();

  try {
    const createContact = new SibApiV3Sdk.CreateContact();

    createContact.email = email;
    createContact.listIds = [2];
    const response = await apiInstance.createContact(createContact);

    return new Response(JSON.stringify(response));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
}

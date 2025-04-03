import { NextRequest, NextResponse } from "next/server";
// import * as SibApiV3Sdk from "sib-api-v3-typescript";

// export async function POST(req: NextRequest) {
//   const SibApiV3Sdk = (await import("sib-api-v3-typescript")).default;

//   const apiKey = process.env.NEXT_BREVO_CONTACT_KEY!;

//   const apiInstance = new SibApiV3Sdk.ContactsApi();
//   apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, apiKey);

//   const { email } = await req.json();

//   try {
//     const createContact = new SibApiV3Sdk.CreateContact();

//     createContact.email = email;
//     createContact.listIds = [2];
//     const response = await apiInstance.createContact(createContact);

//     return NextResponse.json(response);

//   } catch (error) {
//     return NextResponse.json(error);
//   }
// }

export async function POST(req: NextRequest) {
  const apiKey = process.env.NEXT_BREVO_CONTACT_KEY!;

  const { email } = await req.json();

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [2],
    }),
  };

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", options);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error: "Failed to create contact",
      details: error,
    });
  }
}

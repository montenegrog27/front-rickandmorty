/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
  aws_project_region: "us-east-1",
  aws_cognito_identity_pool_id:
    "us-east-1:5878db3c-ba19-4a4a-90b8-d9912b978a04",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_tWHRcoTNa",
  aws_user_pools_web_client_id: "732v2g07i8qtmegavogcauf2go",
  oauth: {
    domain:
      "rickiandmoryaab5760f-aab5760f-dev.auth.us-east-1.amazoncognito.com",
    scope: [
      "phone",
      "email",
      "openid",
      "profile",
      "aws.cognito.signin.user.admin",
    ],
    redirectSignIn:
      "https://front-rickandmorty-keohjayac-montenegrog27.vercel.app/home",
    redirectSignOut:
      "https://front-rickandmorty-keohjayac-montenegrog27.vercel.app/",
    responseType: "code",
    onAuthCreateAccount: async (authState, data) => {
      try {
        // Realiza la solicitud POST a la ruta deseada
        const response = await fetch(
          "https://api-aws-rickandmorty-production.up.railway.app/logiin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // Puedes enviar los datos necesarios
          }
        );

        if (response.ok) {
          console.log("datex", data);
          // Si la solicitud es exitosa
          // Realiza alguna acción (redirección, etc.)
        } else {
          console.log("data", data);

          // Si la solicitud falla
          // Maneja el error aquí
        }
      } catch (error) {
        // Maneja cualquier error de red aquí
        console.error("Error:", error);
      }
    },
  },
  federationTarget: "COGNITO_USER_POOLS",
  aws_cognito_username_attributes: ["EMAIL"],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ["EMAIL"],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: ["SMS"],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ["EMAIL"],
};

export default awsmobile;

"use server";

import { cookies } from "next/headers";
import { createSessionClient, createAdminClient  } from "../server/appwrite";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";

export const signIn = async (user: signInProps) => {
    try {
        // Mutation / Database/ Make Fetch   
        const { account } = await createAdminClient();
        const response = await account.createEmailPasswordSession (user.email, user.password);
        cookies().set("appwrite-session", response.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return parseStringify(response); 

    } catch (error) { 
        console.error("Error :",error);
    }
}


export const signUp = async (userData: SignUpParams) => {
    const { email, password, firstName, lastName } = userData;
    try {
        // Mutation / Database/ Make Fetch 
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
        const session = await account.createEmailPasswordSession(email, password);
      
        cookies ().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });

        return parseStringify(newUserAccount); 
      
    } catch (error) {
        console.error("Error :",error);
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      console.log(account);
      const user = await account.get();  
      return parseStringify(user); 
    } catch (error) {
      return null;
    }
  }


export const logoutAccount = async () => {
    try {
        const { account } = await createSessionClient();
        cookies().delete("appwrite-session");

        await account.deleteSession("current");
    } catch (error) {
        console.error("Error :",error);
    }
}
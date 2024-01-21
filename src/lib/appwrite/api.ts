import { INewUser } from "@/types";
import { account, avatars } from "./config";
import { ID } from "appwrite";
import { string } from "zod";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if(!newAccount) throw new Error("Account creation failed");

      const avatarUrl = avatars.getInitials(user.name);

      // const newUser = await saveUserToDB()

    return newAccount;
  } catch (error) {
    console.log(error);
    return error;
  }
}


// export async funiction saveUserToDB(user : {
//   accountIF ; string;
//   email : string;
//   name : string;

// })
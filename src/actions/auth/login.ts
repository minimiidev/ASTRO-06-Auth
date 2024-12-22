import { z } from "astro:schema";
import { defineAction } from "astro:actions";
import { firebase } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const login = defineAction({
  accept: "form",
  input: z.object({
    email: z.string().email(),
    password: z.string().min(6),
    rememberMe: z.boolean().optional(),
  }),
  handler: async ({ email, password, rememberMe }, { cookies }) => {
    if (rememberMe) {
      cookies.set("email", email, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 año,
        path: "/",
      });
    } else {
      cookies.delete("email", {
        path: "/",
      });
    }

    try {
      const user = await signInWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );

      // return user;
      return { ok: true };
    } catch (error) {
      console.log(error);
      return error;
    }

    throw new Error("Something went wrong");
  },
});

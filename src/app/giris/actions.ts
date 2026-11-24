"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE, AUTH_MAX_AGE, passwordMatches, sessionToken } from "@/lib/site-auth";

export interface LoginState { error?: string }

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("git") ?? "/");
  if (!(await passwordMatches(password))) {
    await new Promise((r) => setTimeout(r, 800)); // kaba kuvvet denemelerini yavaşlat
    return { error: "Parola yanlış." };
  }
  (await cookies()).set(AUTH_COOKIE, await sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: AUTH_MAX_AGE,
    path: "/",
  });
  redirect(next.startsWith("/") && !next.startsWith("//") ? next : "/");
}

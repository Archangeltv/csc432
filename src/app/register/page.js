"use client";
import Register from "@/components/auth/Register";
import { Navbar } from "@/components/Navbar";
import { useState, useEffect } from "react";
import { getUser } from "@/lib/authHandlers";

export default function RegisterPage() {
  const [user, setUser] = useState(null);

  //Get User Information
  useEffect(() => {
    setUser(getUser());
  }, []);

  if (!user)
    return (
      <>
        <Navbar />
        <main className="h-screen w-full flex justify-center items-center px-10">
          <section name="register-box" className="w-full md:w-1/2">
            <h1 className="w-full text-left text-[3em] font-bold text-payne-gray mb-2">
              Register
            </h1>
            <Register />
          </section>
        </main>
      </>
    );

  return <>{window.location.assign("/dashboard")}</>;
}

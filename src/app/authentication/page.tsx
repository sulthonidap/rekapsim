import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "./components/user-auth-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="bg-[#203863] h-screen ">
        <div className="px-8 lg:flex lg:items-center lg:w-full">
          <img src="/logo-auth.png" alt="" className="lg:w-1/2" />
          <div className="lg:w-1/4 lg:mx-auto">
          <p className="text-white text-2xl font-bold text-center mb-4">Login</p>
          <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  );
}

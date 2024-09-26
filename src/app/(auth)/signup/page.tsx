import { SignUpForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function Page() {
    return (
        <div className="max-w-lg mx-auto mt-12 px-6">
            <Logo size={250} />
            <h1 className="mt-10 text-2xl">Create your account</h1>
            <div className="mt-10 mb-14 flex flex-col gab-6 space-y-6">
                <SignUpForm />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
                <div className="text-gray-500"> if you already have an account</div>
                <Link href={"/signin"} className="hover:underline"> / Login </Link>
            </div>


        </div>
    )
}
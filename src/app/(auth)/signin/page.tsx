import { SignInForm } from "@/components/auth/signin-form";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export default function Page() {
    return (
        <div className="max-w-lg mx-auto mt-12 px-6">
            <Logo size={250} />
            <h1 className="mt-10 text-2xl">Login to your account</h1>
            <div className="mt-10 mb-14 flex flex-col gab-6 space-y-6">
                <SignInForm />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
                <div className="text-gray-500"> Don't have an account yet?</div>
                <Link href={"/signup"} className="hover:underline"> Create account</Link>
            </div>


        </div>
    )
}
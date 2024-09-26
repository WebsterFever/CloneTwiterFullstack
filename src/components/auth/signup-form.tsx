"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Button } from "../ui/button";

export const SignUpForm = () => {
    const router = useRouter();
    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleEnterButton = () => {
        router.replace('/home');
    }

    return (
        <>


            <Input
                placeholder="Enter your name"
                value={nameField}
                onChange={t => setNameField(t)}
            />


            <Input
                placeholder="Enter your email"
                value={emailField}
                onChange={t => setEmailField(t)}

            />


            <Input

                placeholder="Enter your password"
                value={passwordField}
                onChange={t => setPasswordField(t)}
                password

            />

            <Button
                label="Create your account"
                onCLick={handleEnterButton}
                size={1}
            />


        </>

    );
}

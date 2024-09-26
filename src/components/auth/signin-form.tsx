"use client";


import { useRouter } from "next/navigation"; 
import { useState } from "react";
import {Input} from "@/components/ui/input"
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Button } from "../ui/button";

export const SignInForm = () => {
    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleEnterButton = () =>{
        router.replace('/home');
    }

    return (
        <>

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
            label="Enter"
            onCLick={handleEnterButton}
            size={1}
           />
           

        </>

    );
}

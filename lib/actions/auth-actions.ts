'use server'

import {auth} from "@/lib/better-auth/auth";
import {inngest} from "@/lib/inngest/client";
import {headers} from "next/headers";

export const signUpWithEmail = async ({ email, password, fullName, country, investmentGoals, riskTolerance, preferredIndustry } : SignUpFormData)=> {

    try {
        const response = await auth.api.signUpEmail({
            body: { email, password, name: fullName }
        })

        console.log("Auth signup response:", response)

        if (response) {
            await inngest.send({
                name: 'app/user.created',
                data: {
                    email,
                    name: fullName,
                    country,
                    investmentGoals,
                    riskTolerance,
                    preferredIndustry
                }
            }).catch(error => {
                console.error("Inngest send failed (non-blocking):", error)
            })

            console.log("Inngest event queued")
        }

        return { success: true, data: response }
    }
    catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Sign up failed. Please try again.'
        }
    }
}

export const signInWithEmail = async ({ email, password } : SignInFormData)=> {

    try {
        const response = await auth.api.signInEmail({
            body: { email, password }
        })

        console.log("Auth signin response:", response)

        return { success: true, data: response }
    }
    catch (error) {
        console.log('Sign in failed', error)
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Sign up failed. Please try again.'
        }
    }
}

export const signOut = async () => {
    try {
        await auth.api.signOut({
            headers: await headers()
        })
    }
    catch (error) {
        console.log(error)
        return { success: false, error: error }
    }
}
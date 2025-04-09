import { useState } from "react";

export function useCreateTransaction(){

    async function createTransaction(data) {
        
        try {

            const response = await fetch('http://localhost:3000/api/transactions' , {
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Erro ao salvar transação.")
            }

            return await response.json();


        } catch (error) {
            console.log("Erro na criação de uma nova transação." , error)
        }


    }


    return { createTransaction }


}
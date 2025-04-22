import { useCallback } from "react";

export function useDeleteTransaction(){
    const deleteTransaction = useCallback(async(id)=>{
        try {
            const res = await fetch(`http://localhost:3000/api/transactions/${id}`, {
                method: "DELETE"
            })

            if (!res.ok){
                throw new Error("Erro ao deletar transação.")
            }

            return true;

        } catch (error) {
            console.error("Error:" , error)
            return false;
        }
    }, []
    )

    return { deleteTransaction }

}
import { useEffect  , useState } from "react";

export function useTransactions(filters){

    const [transactions, setTransactions] = useState([])

    useEffect(
        () => {

            const fetchTransactions = async () => {

                try {
                    
                    let url = "http://localhost:3000/api/transactions"
                    const params = new URLSearchParams();

                    if (filters.startDate) params.append("startDate", filters.startDate);
                    if (filters.endDate) params.append("endDate", filters.endDate);
                    if (filters.orderBy) params.append("orderBy", filters.orderBy);

                    const finalUrl = `${url}?${params.toString()}`;
                    
                    const response = await fetch(finalUrl);
                    const data = await response.json();

                    console.log(data)

                    setTransactions(data)
                } catch (error) {
                    console.log("Erro ao buscar Transações")                    
                }
            }
        
            fetchTransactions();
        }
        ,
        [filters]
    );


    return { transactions }


}
import { React, useState, useEffect } from "react";


export function useDashboard(filters){

    const [dashboard, setDashboard] = useState({total:0, totalIncomes:0, totalExpenses:0})

    useEffect(()=>{

        const fetchDashboard = async () => {

            try {
                
                let url='http://localhost:3000/api/dashboard'
                const params = new URLSearchParams();

                if (filters.startDate) params.append("startDate", filters.startDate);
                if (filters.endDate) params.append("endDate", filters.endDate);
                
                const finalUrl = `${url}?${params.toString()}`;

                const response = await fetch(finalUrl)
                const data = await response.json();

                console.log("Dashboard",data)

                setDashboard(data)


            } catch (error) {
                console.log("Erro ao buscar dados", error)
            }

        }
        
        fetchDashboard();

    },[filters])


    return { dashboard }
}
import React from "react";
import './typeContainer.css';
import CardTransaction from "./cardTransaction";


function TypeContainer({title, transactions, classType}){


    return (

        <div className={`typeContainer ${classType}`}>
            <h3 className="titleTypeCont">{title}</h3>
            <div id="typeContainerArea">
                {transactions.length === 0 ? (
                <p>Nenhuma transação encontrada</p>
                ) : (

                    transactions.map((t)=>(
                        <CardTransaction
                            key={t.id} 
                            t_title={t.title}
                            t_amount={t.amount}
                            t_date={t.date}
                            
                            classVar={classType}
                            />

                    ))
                
                )}

            </div>
        </div>

    )

}

export default TypeContainer

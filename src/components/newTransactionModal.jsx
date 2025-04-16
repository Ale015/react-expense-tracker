import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useCreateTransaction } from '../hooks/useCreateTransaction'
import './newTransactionModal.css'


function NewTransactionModal({ isOpen, onClose, onSuccess }) {

    const modalRef = useRef(null);

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("income");
    const [date, setDate] = useState("");

    const { createTransaction } = useCreateTransaction();

    useEffect(
        ()=>{
            function handleClickOutside(event){
                if (modalRef.current && !modalRef.current.contains(event.target)){
                    onClose();
                }
            }

            if (isOpen) {
                document.addEventListener("mousedown", handleClickOutside)
            }

            return () => {

                document.removeEventListener("mousedown", handleClickOutside)
            }

        }
        , [isOpen, onClose]
    );


    async function handleSubmit(e) {
        e.preventDefault();

        if (!title || !amount || !date) {
            alert("Preencha todos os campos.");
            return;
        }

        const data = {
            title,
            amount: parseFloat(amount),
            type,
            date,
        }

        const result = await createTransaction(data);

        if(result){
            onSuccess();
            onClose();
            setTitle("")
            setAmount("")
            setType("income")
            setDate("")
        }

    }

    if (!isOpen){
        return null;
    }

    return (
        <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        <h3>Nova Transação</h3>
        <form onSubmit={handleSubmit}>
          <p>
            Título
          </p>
          <input
            type="text"
            placeholder="ex.: salário"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <p>
              Valor
            </p>
          <input
            type="number"
            placeholder="ex.: 123.45"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
            <p>
              Tipo
            </p>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Entrada</option>
            <option value="expense">Despesa</option>
          </select>
            <p>
              Data
            </p>
          <input
            type="date"
            className='dateInput'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
         
          <div className="buttons">
            <button type="button" className='cancelBtn' onClick={onClose}>Cancelar</button>
            <button type="submit" className='saveBtn'>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default NewTransactionModal
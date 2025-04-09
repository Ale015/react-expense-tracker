import React from 'react'
import './nullGraphBox.css'
import { Frown } from 'lucide-react'

function NullGraphBox() {
  return (
    <div className='nullGraphBox'>
        <Frown  color='gray' />
        <p>Nenhuma transação encontrada</p>
    </div>
  )
}

export default NullGraphBox
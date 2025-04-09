import React from 'react'
import './notFoundBox.css'

import { Frown } from 'lucide-react'

function NotFoundBox() {
  return (
    <div className='notFoundBoxCont'>
        <Frown color='gray'/>
        <p> Nenhuma transação encontrada.</p>
    </div>
  )
}

export default NotFoundBox
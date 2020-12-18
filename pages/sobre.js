import { useState } from 'react';
import Link from 'next/link';

function Sobre(){
    return (
        <div>
            <h1>Página Sobre</h1>
            <Link href="/">
            <a>Acessar Página inicial</a>  
            </Link>
        </div>
        )
    }


export default Sobre
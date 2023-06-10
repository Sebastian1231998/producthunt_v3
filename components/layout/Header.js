import React from 'react'
import { Buscador } from '../UI/Buscador'
import Navegacion from './Navegacion'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <p>P</p>
                    <Buscador />
                    <Navegacion />
                </div>
                <div>
                    <nav>
                        <p>Hola:Sebas</p>
                        <button>Cerrar Sesión</button>
                        <Link href={"/"}>Login</Link>
                        <Link href={"/"}>Crear Cuenta</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header

import { ReactNode } from "react"


// ReactNode.- Permite renderizar strings pero también componentes dentro de otros componentes
type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <p className='bg-red-600 p-2 text-white font-bold text-sm text-center'>
            {children}
        </p>
    )
}

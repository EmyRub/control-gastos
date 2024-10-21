import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"

export const useBudget = () => {

    //Se crea un Hook Personalizado, se importa useContext y BudgetContext
    const context = useContext(BudgetContext)
    // En caso de que no exista un context
    if (!context) {
        throw new Error('useBudget must be used within a BudgetProvider')
    }
    return context
}
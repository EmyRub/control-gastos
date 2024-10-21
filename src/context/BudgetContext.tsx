import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reduce"

type BudgetContextProps = {
    state: BudgetState,
    dispatch: Dispatch<BudgetActions>,
    totalExpenses: number,
    remainingBudget: number
}

type BudgetProviderProps = {
    children: ReactNode
}

//Context es la acción de tener el estado global, pero provider van a ser los datos que va a tener ese context
// ({} as BudgetContextProps)- Es decir a typescript, confia en mi, se lo que hago o poner null!
export const BudgetContext = createContext<BudgetContextProps>(null!)

/*provider.- lugar donde vienen los datos, en este caso (reducer), siempre es un arrow function y siempre retorna algo, por eso es un tsx
*/
//children.- Prop especial que hace referencia a los hijos de un componente
export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    //Se importa useReducer
    const [state, dispatch] = useReducer(budgetReducer, initialState)
    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])

    const remainingBudget = state.budget - totalExpenses

    // <Budget...> Conecta provider con context
    // value.- Prop especial de provider y siempre es un obj y retorna un obj
    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                remainingBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
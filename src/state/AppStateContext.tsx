import { createContext, useContext, Dispatch, FC } from "react"
import { App } from "../App"
import {appStateReducer } from "./appStateReducer"
import { Action } from "./actions"
import { useImmerReducer } from "use-immer"

type Task = {
    id: string
    text: string
}

type List = {
    id: string
    text: string
    tasks: Task[]
}

export type AppState ={
    lists: List[]
}

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{id: "cO", text: "Generate app scaffold"}]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{id: "c2", text: "Generate app scaffold"}]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{id: "c3", text: "Begin to use static typing"}]
        }
    ]
}

type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
)

export const AppStateProvider: FC = (children) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)

    const {lists} = appData

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }

    return (
        <AppStateContext.Provider value = {{lists, getTasksByListId, dispatch}}>
            (children)
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}
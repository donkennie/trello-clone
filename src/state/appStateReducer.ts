import { Action } from "./actions"

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

export const appStateReducer = (
    draft: AppState,
    action: Action
): AppState | void => {
    switch(action.type) {

    }
}
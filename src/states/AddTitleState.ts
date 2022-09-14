import { atom, selector } from 'recoil'
import { Task } from '../types/Task'

export const addTitleState = atom<Task[]>({
  key: "addTitleState",
  default: [],
})

export const addTitleStateLength = selector<number>({
  key: "addTitleStateLength",
  get: ({get}) => {
    const addTitleNumber: Task[] = get(addTitleState)
    return addTitleNumber?.length || 0
  }
})


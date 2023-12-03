import { atom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'

interface IFilter {
  [key: string]: NonNullable<any>
}

export const filterAAtom = atom<IFilter>({})

export const filterBAtom = atom<IFilter>({})

export const useInitFilterB = (initialData: any) => {
  useHydrateAtoms([[filterBAtom, initialData]])
}

export const filterCAtom = (initialValue: any) => atom(initialValue)

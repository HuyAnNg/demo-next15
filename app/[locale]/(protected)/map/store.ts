import { Key } from 'react'
import { create } from 'zustand'
import { Point } from './type'

interface State {
  formMode: 'create' | 'edit'
  formOpen: boolean
  formTarget: string
  page: number
  size: number
  isOpenCreateDialog: boolean
  status: number | undefined
  ipOrName: string | undefined

  camCoordinateList: Point[]
  setCamCoordinateList: (camCordinateList: Point[]) => void

  markerCoordinate: { lat: number; lng: number } | undefined
  setMarkerCoordinate: (
    markerCoordinate: { lat: number; lng: number } | undefined,
  ) => void

  resetLocalRegionChecked: boolean
  regionIds: Key[]
  setRegionIds: (regionIds: Key[]) => void
  setResetLocalRegionChecked: () => void

  setIpOrName: (ipOrName: string | undefined) => void
  setStatus: (status: number | undefined) => void
  setPage: (page: number) => void
  setSize: (size: number) => void
  setIsOpenCreateDialog: (isOpenCreateDialog: boolean) => void
  setFormOpen: (open: boolean) => void
  hideForm: () => void
  showCreateForm: () => void
  showEditForm: (id: string) => void
}

export const useStore = create<State>((set) => ({
  formMode: 'create',
  formOpen: false,
  formTarget: '',
  page: 1,
  size: 10,
  isOpenCreateDialog: false,
  status: undefined,
  ipOrName: undefined,

  regionIds: [],
  unitIds: [],
  resetLocalRegionChecked: true,
  resetLocalUnitChecked: true,

  markerCoordinate: undefined,
  setMarkerCoordinate: (
    markerCoordinate: { lat: number; lng: number } | undefined,
  ) => set({ markerCoordinate: markerCoordinate }),

  camCoordinateList: [],
  setCamCoordinateList: (camCordinateList: Point[]) =>
    set({ camCoordinateList: [...camCordinateList] }),

  setRegionIds: (regionIds: Key[]) => set({ regionIds }),
  setResetLocalRegionChecked: () =>
    set((state) => ({
      resetLocalRegionChecked: !state.resetLocalRegionChecked,
    })),

  setFormOpen(open) {
    set({ formOpen: open })
  },
  hideForm() {
    set({ formOpen: false, formTarget: '' })
  },

  showCreateForm() {
    set({ formMode: 'create', formOpen: true })
  },
  showEditForm(id: string) {
    set({ formMode: 'edit', formOpen: true, formTarget: id })
  },
  setIpOrName(data) {
    set({ ipOrName: data })
  },
  setStatus(data) {
    set({ status: data })
  },
  setPage(data) {
    set({ page: data })
  },
  setSize(data) {
    set({ size: data })
  },

  setIsOpenCreateDialog: (isOpenCreateDialog: boolean) =>
    set({ isOpenCreateDialog }),
}))

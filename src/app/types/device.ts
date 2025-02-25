import { ShelfPosition } from "./shelfPosition"

export type Device = {
    id: number,
    name: string,
    deviceType: string,
    shelfPosition: ShelfPosition[]
}
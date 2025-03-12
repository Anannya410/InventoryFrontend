import { Device } from "./device"
import { Shelf } from "./shelf"

export type ShelfPosition ={
    id : number,
    name : string,
    device : Device,
    shelf : Shelf
}
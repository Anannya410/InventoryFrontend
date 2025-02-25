import { Shelf } from "./shelf"

enum Rack{
    TOP = "Top",
    BOTTOM = "Bottom"
}

export type ShelfPosition ={
    id: number,
    name: Rack,
    deviceId: number,
    shelf : Shelf
}
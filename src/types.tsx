export type Space = {
  id: number
  type: "coworking" | "cafe"
  name: string
  loc: Location
  address: string
  hours?: Array<string>
  distance?: number
  dayPrice?: number
}

export type Location = {
  lat: number
  lng: number
}

export type PlaceType = {
  coworking: boolean
  cafe: boolean
}
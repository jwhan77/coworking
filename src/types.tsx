export interface Space {
  id: number;
  type: "coworking" | "cafe";
  name: string;
  imgSrc: string;
  loc: Location;
  address: string;
  hours?: Array<string>;
  distance?: number;
  dayPrice?: number;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface ListProps {
  items: Space[];
  handleSelect: Function;
}
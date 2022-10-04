export interface Space {
  id: number;
  type: "coworking" | "cafe";
  name: string;
  imgSrc: string;
  loc: Location;
  distance?: number;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface ListProps {
  items: Space[];
  handleSelect: Function;
}
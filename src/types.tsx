export interface Space {
  id: number;
  type: "coworking" | "cafe";
  name: string;
  imgSrc: string;
  lat: number,
  lng: number
}

export interface ListProps {
  items: Space[];
}
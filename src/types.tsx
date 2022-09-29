export interface Space {
  id: number;
  name: string;
  imgSrc: string;
  lat: number,
  lng: number
}

export interface ListProps {
  items: Space[];
}
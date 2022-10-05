import { Space } from "./types";

import img from './assets/workspace1.jpg'

export const data: Array<Space> = [
  { id: 0, type: 'coworking', name: '오피스제주', imgSrc: img, loc: {lat: 33.5330619, lng: 126.6309226}, address: "제주 제주시 조천읍 조천2길 25 1층", hours: ["월-토 09:00-21:00"], dayPrice: 15000 },
  { id: 1, type: 'coworking', name: '바나나오피스', imgSrc: img, loc: {lat: 33.4872052, lng: 126.485102}, address: "제주 제주시 원노형3길 4-9", hours: ["월-금 09:00-18:00", "(점심시간 12:00-13:00)"], dayPrice: 10000 },
  { id: 2, type: 'coworking', name: '아이데스크', imgSrc: img, loc: {lat: 33.4821041, lng: 126.4987068}, address: "제주 제주시 연북로 161 2층", hours: ["월-금 09:00-17:30", "(점심시간 12:00-13:00)"], dayPrice: 13000 },
  { id: 3, type: 'coworking', name: '오피스제주 사계점', imgSrc: img, loc: {lat: 33.2341846, lng: 126.2905231}, address: "제주 서귀포시 안덕면 향교로 214", hours: ["월-토 09:00-21:00"], dayPrice: 15000 },
  { id: 4, type: 'coworking', name: '제주창조경제혁신센터', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "제주 제주시 중앙로 217", hours: ["월-금 09:00-18:00 "], dayPrice: 0 },
  { id: 5, type: 'cafe', name: '카페1', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "", hours: [""] },
  { id: 6, type: 'cafe', name: '카페2', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "", hours: [""] },
  { id: 7, type: 'cafe', name: '카페3', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "", hours: [""] },
  { id: 8, type: 'cafe', name: '카페4', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "", hours: [""] },
  { id: 9, type: 'cafe', name: '카페5', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "", hours: [""] },
  { id: 10, type: 'cafe', name: '카페6', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "", hours: [""] },
  { id: 11, type: 'cafe', name: '카페7', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "", hours: [""] },
  { id: 12, type: 'cafe', name: '카페8', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "", hours: [""] },
  { id: 13, type: 'cafe', name: '카페9', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "", hours: [""] },
  { id: 14, type: 'cafe', name: '카페10', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "", hours: [""] },
  { id: 15, type: 'cafe', name: '카페11', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "", hours: [""] },
  { id: 16, type: 'cafe', name: '카페12', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "", hours: [""] },
  { id: 17, type: 'cafe', name: '카페13', imgSrc: img, loc: {lat: 33.500347, lng: 126.5301}, address: "", hours: [""] }
]
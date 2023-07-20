import { MouseEventHandler } from "react";

export interface CarProps {
  id: number,
  name: string;
  imagePath: string;
  kills: number;
  speed: number;
  armorLevel: number;
  fuelCapacity: number;
  carRent: number;
  weaponry: string;
}

export interface CarCardProps {
  name: string;
  imagePath: string;
  kills: number;
  speed: number;
  armorLevel: number;
  fuelCapacity: number;
  carRent: number;
  transmission: string;
  weaponry: string;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}


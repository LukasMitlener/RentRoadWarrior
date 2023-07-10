import { MouseEventHandler } from "react";

export interface CarProps {
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

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
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

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

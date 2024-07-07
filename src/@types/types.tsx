export type ButtonProps = {
  bgColor: string;
  textColor: string;
  text: string;
  width: string;
  radius: string;
  border: string;
};

export type CardProps1 = {
  text: string;
  img: string;
  path: string;
  size: string;
  onClick: () => void;
};

export type CardProps2 = {
  text: string;
  img: string;
  path: string;
  shadow: string;
  location: string | undefined;
  breed: string;
 
};

export type CardProps3 = {
  btnText: string;
  heading: string;
  text: string;
  img: string;
};

export type CardProps4 = {
  text: string;
  btnText: string;
  size: string;
  heading: string;
  img: string;
};

export type Photo = {
  small: string;
  medium?: string;
  large?: string;
  full?: string;
};

export type Animal = {
  status: string;
  age: string;
  gender: string;
  size: string;
  description: string;
  contact: {
    email?: string;
    phone?: string;
    address?: {
      city?: string;
      state?: string;
      postcode?: string;
      country?: string;
    };
  };
  type: string;
  breeds: {
    primary: string;
    secondary?: string;
    mixed?: boolean;
    unknown?: boolean;
  };
  name: string;
  species: string;
  id: number;
  photos: Photo[];
};

export type PetDetailType = {
  pet: Animal | undefined | null;
};

export type Pagination = {
  total_pages: number;
  current_page: number;
};

export type PetsResponse = {
  animals: Animal[];
  pagination: Pagination;
};

export type SinglePetResponse = {
  animal: Animal;
};

export type PetState = {
  singlePet: SinglePetResponse | null;
  limitedPets: PetsResponse | null;
  data: PetsResponse | null;
  totalPages: number;
  loading: boolean;
  error: string | null;
};

export type FetchPetsByTypesArgs = {
  slug: string;
  page: number;
  setResponse: {};
  setTotalPages: {};
};

export type FetchSinglePetsByTypesArgs = {
  petId: string;
};

export type FetchLimitedPetsByTypesArgs = {
  pageNumber: string;
  limit: string | number
};

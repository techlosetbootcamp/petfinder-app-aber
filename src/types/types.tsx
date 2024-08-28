export type ButtonProps = {
  bgColor: string;
  textColor: string;
  text: string;
  width: string;
  radius: string;
  border: string;
  image? : boolean
};

export type ImageCardProps = {
  text: string;
  img: string;
  path: string;
  size: string;
  onClick: () => void;
};

export type PetCardProps = {
  text: string;
  img: string;
  path: string;
  shadow: string;
  city: string | undefined;
  state: string | undefined;
  primaryBreed: string;
  secondaryBreed: string | null | undefined;
  width: string;
  height: string;
};

export type QueryCardProps = {
  btnText: string;
  heading: string;
  text: string;
  img: string;
};

export type ArticleCardProps = {
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
  total_count: number;
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
  type: string | null | undefined;
  location: string | null | undefined;
};

export type FetchSearchedPetsByTypesArgs = {
  page: number;
  search: string | null;
  queryInput: string;
};

export type NavContextType = {
  open: true | false;
  hideNav: true | false;
  clickedElement: string;
  toggleMobileNav: () => void;
  toggleDesktopNav: (element: string) => void;
};

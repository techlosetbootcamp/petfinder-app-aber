import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addAuthorizationHeader,
  axiosInstance,
} from "../../constants/petfinderapi";


type Animal = {
  status: string;
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
  photos: Array<{
    small?: string;
    medium?: string;
    large?: string;
    full?: string;
  }>;
};


type Pagination = {
  total_pages: number ;
  current_page: number;
};


type PetsResponse = {
  animals: Animal[];
  pagination: Pagination;
};

type PetState = {
 
  singlePet : Animal[];
  limitedPets : PetsResponse | null;
  data: PetsResponse | null; // Array of Animal objects
  totalPages: number;
  loading: boolean;
  error: string | null;

};

const initialState: PetState = {
  limitedPets : null,
  singlePet : [],
  data: null,
  totalPages: 0,
  loading: false,
  error: null,

};



type FetchPetsByTypesArgs = {
  slug: string;
  page: number;
  setResponse: {};
  setTotalPages: {};
};

type FetchSinglePetsByTypesArgs = {
  petId: string;
};

type FetchLimitedPetsByTypesArgs = {
  page: string;
};


export const getPetsByTypes = createAsyncThunk<
  PetsResponse,
  FetchPetsByTypesArgs,
  { rejectValue: string }
>("pets/fetchByTypes", async ({ slug,page }, rejectWithValue) => {
  try {
    await addAuthorizationHeader();
    const response = await axiosInstance.get(
      `/animals?type=${slug}&page=${page}`
    );

    return response?.data;
  } catch (error) {
    console.log(error);
  }
});

export const getPetById = createAsyncThunk<
Animal[],
  FetchSinglePetsByTypesArgs,
  { rejectValue: string }
>("pets/fetchById", async (petId) => {
  try {
    await addAuthorizationHeader();
    const response = await axiosInstance.get(`/animals/${petId}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
});

export const getLimitedPets = createAsyncThunk<
PetsResponse, FetchLimitedPetsByTypesArgs,
  { rejectValue: string }
>("pets/fetchByLimit", async (page) => {
  try {
    await addAuthorizationHeader();
    const response = await axiosInstance.get(`/animals?limit=5&status=adoptable&page=${page}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
});

export const searchPets = createAsyncThunk<PetsResponse,"",{rejectValue : string}>("pets/searchPets", async () => {

  try {
    await addAuthorizationHeader();
    const response = await axiosInstance.get(`/animals?limit=100`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
});

const petSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPetsByTypes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getPetsByTypes.fulfilled,
      (state, action: PayloadAction<PetsResponse>) => {
        state.data = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getPetsByTypes.rejected, (state, payload) => {
      state.data = null;
      state.loading = false;
    });
    builder.addCase(getPetById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getPetById.fulfilled,
      (state, action: PayloadAction<Animal[]>) => {
        state.singlePet = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getPetById.rejected, (state, payload) => {
      state.singlePet = [];
      state.loading = false;
    });

    builder.addCase(getLimitedPets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getLimitedPets.fulfilled,
      (state, action: PayloadAction<PetsResponse>) => {
        state.limitedPets = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getLimitedPets.rejected, (state, payload) => {
      state.limitedPets = null;
      state.loading = false;
    });

    builder.addCase(searchPets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      searchPets.fulfilled,
      (state, action: PayloadAction<PetsResponse>) => {
        state.data = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(searchPets.rejected, (state, payload) => {
      // state.data = null;
      state.loading = false;
    });
  },
});

export const {} = petSlice.actions;
export default petSlice.reducer;

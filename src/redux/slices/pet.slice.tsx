import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FetchLimitedPetsByTypesArgs, FetchPetsByTypesArgs, FetchSinglePetsByTypesArgs, PetState, PetsResponse, SinglePetResponse } from "../../@types/types";
import { addAuthorizationHeader, axiosInstance } from "../../constants/PetFinderApi";


const initialState: PetState = {
  limitedPets : null,
  singlePet : null,
  data: null,
  totalPages: 0,
  loading: false,
  error: null,

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
    console.log("Error fro here",error);
  }
});

export const getPetById = createAsyncThunk<
SinglePetResponse,
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
>("pets/fetchByLimit", async ({pageNumber, limit}, rejectWithValue) => {
  try {
    await addAuthorizationHeader();
    const response = await axiosInstance.get(`/animals?limit=${limit}&status=adoptable&page=${pageNumber}`);
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
      (state, action: PayloadAction<SinglePetResponse>) => {
        state.singlePet = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getPetById.rejected, (state, payload) => {
      state.singlePet = null;
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

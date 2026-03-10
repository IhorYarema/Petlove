import { createSelector } from "@reduxjs/toolkit";

export const selectUserName = (state) => state.auth.user?.name ?? null;

export const selectUserFullInfo = (state) => state.auth.user;

export const selectUserPets = createSelector(
  selectUserFullInfo,
  (user) => user?.pets || [],
);

export const selectUserFavorites = createSelector(
  selectUserFullInfo,
  (user) => user?.noticesFavorites || [],
);

export const selectUserViewed = createSelector(
  selectUserFullInfo,
  (user) => user?.noticesViewed || [],
);

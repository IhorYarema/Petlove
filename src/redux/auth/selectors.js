export const selectUserName = (state) => state.auth.user?.name ?? null;

export const selectUserFullInfo = (state) => state.auth.user;

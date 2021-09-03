import { createSelector } from 'reselect';

// types

export const notificationsSelector = createSelector(
  (state) => state.App,
  (app) => app.notifications,
);
export const showLoading = createSelector(
    (state) => state.App,
    (app) => app.showLoading,
  );


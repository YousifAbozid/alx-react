// src/selectors/notificationSelector.js

// Selector for filterTypeSelected
export const filterTypeSelected = (state) => state.notifications.filterType;

// Selector for getNotifications
export const getNotifications = (state) => state.notifications.notifications;

// Selector for getUnreadNotifications
export const getUnreadNotifications = (state) => {
  const notifications = state.notifications.notifications;
  return notifications.filter((notification) => !notification.read);
};

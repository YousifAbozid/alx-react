// src/selectors/notificationSelector.test.js

import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

// Mock state data for testing
const mockState = {
  notifications: {
    filterType: 'someFilter',
    notifications: [
      { id: 1, message: 'Notification 1', read: true },
      { id: 2, message: 'Notification 2', read: false },
      { id: 3, message: 'Notification 3', read: true },
      { id: 4, message: 'Notification 4', read: false },
    ],
  },
};

// Test filterTypeSelected selector
test('filterTypeSelected returns correct filter type', () => {
  expect(filterTypeSelected(mockState)).toBe('someFilter');
});

// Test getNotifications selector
test('getNotifications returns list of notifications', () => {
  expect(getNotifications(mockState)).toEqual([
    { id: 1, message: 'Notification 1', read: true },
    { id: 2, message: 'Notification 2', read: false },
    { id: 3, message: 'Notification 3', read: true },
    { id: 4, message: 'Notification 4', read: false },
  ]);
});

// Test getUnreadNotifications selector
test('getUnreadNotifications returns list of unread notifications', () => {
  expect(getUnreadNotifications(mockState)).toEqual([
    { id: 2, message: 'Notification 2', read: false },
    { id: 4, message: 'Notification 4', read: false },
  ]);
});

import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`portfolio_users/${id}`)
    .set({
      username,
      email,
    });

// Readings API

export const doCreateReading = (authUser, story) =>
  db.ref(`portfolio_users/${authUser.uid}/readings/${story.objectID}`)
    .set(story);

export const doRemoveReading = (authUser, story) =>
  db.ref(`portfolio_users/${authUser.uid}/readings/${story.objectID}`)
    .remove();

export const onGetReadings = (authUser, fn) =>
  db.ref(`portfolio_users/${authUser.uid}/readings`)
    .on('value', fn);

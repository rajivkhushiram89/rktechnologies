import { db } from './firebase';
import { fs } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`portfolio_users/${id}`)
    .set({
      username,
      email,
    });

// Readings API
export const doCreateMessage = data => {
  try {
    db.ref("messages").set({
      firstname: data.firstName,
      lastname: data.lastName,
      email : data.email,
      message: data.message,
    });
  } catch (error) {
    console.log(error);
  }
};

export const doCreateMessageFS = data => {
  try {
    fs.collection("messages").add({
      firstname: data.firstName,
      lastname: data.lastName,
      email : data.email,
      message: data.message,
    });
  } catch (error) {
    console.log(error);
  }
};


export const doCreateReading = (authUser, story) =>
  db.ref(`portfolio_users/${authUser.uid}/readings/${story.objectID}`)
    .set(story);

export const doRemoveReading = (authUser, story) =>
  db.ref(`portfolio_users/${authUser.uid}/readings/${story.objectID}`)
    .remove();

export const onGetReadings = (authUser, fn) =>
  db.ref(`portfolio_users/${authUser.uid}/readings`)
    .on('value', fn);

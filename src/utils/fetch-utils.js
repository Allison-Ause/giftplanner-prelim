// need some kind of backend url or point of contact. what is it?

// BACKEND /USERS for signing IN
// BACKEND /USERS/SESSIONS for signing UP

export async function signInUser(userInfo) {
  // const res = await fetch(`backendLocation/api/v1/users`, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application.json',
  //     'Content-Type': 'application/json',
  //   },
  //   credentials: 'include',
  //   body: JSON.stringify(userInfo),
  // });
  // const data = await res.json();
  // eslint-disable-next-line no-console
  // if (!res.ok) console.error(data.message);
  // can I still redirect here or will my react Component register the new user and trigger the redirect?
}

export async function signUpUser(userInfo) {
  console.log('userInfo in fetch', userInfo);
  // const res = await fetch(`backendLocation/api/v1/users/sessions`, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application.json',
  //     'Content-Type': 'application/json',
  //   },
  //   credentials: 'include',
  //   body: JSON.stringify(userInfo),
  // });
  // const data = await res.json();
  //eslint-disable-next-line no-console
  // if (!res.ok) console.error(data.message);
}

export async function signOut() {
  // delete the cookie!
}

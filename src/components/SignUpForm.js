export default function SignUpForm() {
  const handleSignUp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log('formData', formData);
    const newUser = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password'),
      // firstName: e.target.firstName,
      // lastName: e.target.lastName,
      // email: e.target.email,
      // password: e.target.password,
    };

    console.log('newUser', newUser);
    // get formData
    // send to userContext for processing?
  };

  return (
    <>
      <h1>Sign-Up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          First Name:
          <input type="text" name="firstName" />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

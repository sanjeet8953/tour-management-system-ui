import "./Register.css"
export default function Register() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const mobile = form.elements["mobile"].value;
    const password = form.elements["password"].value;
    const confirmPassword = form.elements["confirmPassword"].value;
    const gender = form.elements["gender"].value;


    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Enter valid 10-digit mobile number");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({ name, email, mobile, gender, password });

    alert("User Registered Successfully!");

    form.reset();
  }

  return (
    <>
      <h2>Register User</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" required />
        <input type="text" name="name" placeholder="Last Name" required />
        <input type="email" name="email" placeholder="Enter Email" required />


        <input
          type="tel"
          name="mobile"
          placeholder="Enter Mobile Number"
          maxLength="10"
          required
        />

        <div className="gender">
          <span>Gender:</span>

          <label>
            <input type="radio" name="gender" value="Male" required />
            Male
          </label>

          <label>
            <input type="radio" name="gender" value="Female" />
            Female
          </label>

          <label>
            <input type="radio" name="gender" value="Other" />
            Other
          </label>
        </div>

        <input type="password" name="password" placeholder="Enter Password" required />

        <input type="password" name="confirmPassword" placeholder="Confirm Password" required />

        <button type="submit">Register</button>
      </form>
    </>
  );
}
function Incorrect() {
  return (
    <>
      <form style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" placeholder="First Name" />
          <input type="email" placeholder="Email" />
          <button type="submit" style={{ width: 'fit-content' }}>
            Sign Up
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Company Name (optional)" />
        </div>
      </form>
    </>
  );
}

export default Incorrect;

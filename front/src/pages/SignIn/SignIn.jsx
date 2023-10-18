

function SignIn() {
    return (
      <main className="main bg-dark"> {/* Utilisez className au lieu de class */}
        <section className="sign-in-content"> {/* Utilisez className au lieu de class */}
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper"> {/* Utilisez className au lieu de class */}
              <label htmlFor="username">Username</label> {/* Utilisez htmlFor au lieu de for */}
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper"> {/* Utilisez className au lieu de class */}
              <label htmlFor="password">Password</label> {/* Utilisez htmlFor au lieu de for */}
              <input type="password" id="password" />
            </div>
            <div className="input-remember"> {/* Utilisez className au lieu de class */}
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label> {/* Utilisez htmlFor au lieu de for */}
            </div>
          </form>
        </section>
      </main>
    );
  }
  
  export default SignIn;
  
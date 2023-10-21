import { Link } from "react-router-dom"


function Error() {
    return (
       <main>
          <section className="error">
             <h1>404</h1>
             <p>Page not found</p>
             <Link to={"/"}>
        <p>Click here to return to the home page</p>
      </Link>
          </section>
       </main>
    )
  }
  
 export default Error
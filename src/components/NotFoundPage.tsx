import { Link } from "react-router-dom";
function NotFoundPage(){
    return(
        <div>
            <h1>The page you are looking for does not exist</h1>
            <Link to={"/"}>Go back to Home page</Link>
        </div>
    )
}
export default NotFoundPage;
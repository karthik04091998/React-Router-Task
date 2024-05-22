import { Link } from "react-router-dom";

const links = [
    {
        name:"FSD",
        path:"/fullstackdeveloper"
    },
    {
        name:"Datascience",
        path:"/datascience"
    },
    {
        name:"CyberSecurity",
        path:"/cybersecurity"
    },
    {
        name:"Career",
        path:"/career"
    },
]
const Homepage = () => {
    return(
         <>
         <div className="Homepage">
        <h1>Homepage</h1>
        {links.map((link) => (
            <Link key={link.path} to={link.path} style={{padding:50,textDecoration:"none"}} >
                {link.name}
            </Link>
        ))}
        </div>
        </>
    )
};
export default Homepage;
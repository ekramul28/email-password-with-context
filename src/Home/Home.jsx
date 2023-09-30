import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
    const AutInfo = useContext(AuthContext);
    console.log(AutInfo)
    return (
        <div>
            home
        </div>
    );
};

export default Home;
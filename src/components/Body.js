import MainConatiner from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
    return (
        <div className="flex">
            
            <Sidebar/>
            <MainConatiner/>
        </div>
    )
}

export default Body;
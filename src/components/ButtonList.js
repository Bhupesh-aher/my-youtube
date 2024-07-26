import Button from "./Button";

const list = ["All", "Gaming", "Songs", "Live", "Cricket", "Cooking", "News", "Soccer", "Valentines", "Yoga", "Movies", "Desgin"];

const ButtonList = () => {
    return ( 
        <div className="flex">
           
           {
            list.map((item, index) => 
                <Button key={index} name={item}/>
            )
           }

            {/* <Button name="All"/>
            <Button name="Gaming"/>
            <Button name="Songs"/>
            <Button name="Live"/>
            <Button name="Cricket"/>
            <Button name="Cooking"/>
            <Button name="News"/>
            <Button name="Soccer"/>
            <Button name="Valentines"/> 
            <Button name="Yoga"/> 
            <Button name="Movies"/> 
            <Button name="Desgin"/>  */}

        </div>
    )
}

export default ButtonList; 
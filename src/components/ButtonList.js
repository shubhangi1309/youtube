import Button from "./Button";

const ButtonList = () => {
    const list = ["All", "Gaming","Songs", "Live","News","Comedy","DIY","Sports" ];

    return (
        <div className="flex">
           {list.map((btnName) => {return (<Button key={btnName} name={btnName}/>)}) }
        </div>
    )
}

export default ButtonList;
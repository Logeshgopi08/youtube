import Button from "./Button";

const ButtonList = () => {

    const Lists = ["All","Popular","Cricket","Tamil","Hindi","English","Movies","Comedy","Horror","Love","Romance","Thriller"];
  return (
   <div className="py-1 flex overflow-x-scroll no-scrollbar  pr-5">
     <div className=" flex  ">
      {Lists.map((list)=><Button key={list} name={list}/>)}
    </div>
   </div>
  );
};

export default ButtonList;

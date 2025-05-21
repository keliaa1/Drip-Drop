import React from "react";
import new_collections from "../Assets/new_collections";
import Item from "./Items";
const NewCollection = () => {
  return (
    <div className="align-center gap-[10px]">
      <h1 className="text-[#171717] text-5xl font-semibold text-center pt-3.5 pb-7">New Collections</h1>
      <div className="mt-[50px] grid grid-cols-4 gap-[80px] justify-center">
        {new_collections.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} oldPrice={item.old_price} newPrice={item.new_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollection

import MenuItem from "./menuItem"


export default function MenuList({list=[]}){
    return(
        <div className="menu-list-contianer">
            {
                list && list.length?
                list.map((listItem)=>{
                    <MenuItem item={listItem}/>
                }):null
            }
        </div>
    )
}
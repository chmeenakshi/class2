const GoogleSearch=(props)=>{
    const {initialUserDetailsList,onDelete} = props
    const {name,uniqueNo} = initialUserDetailsList
    const onRemoveUser=()=>{
        onDelete(uniqueNo)
    }
    return(
       <li className="searchitemConatiner">
        <div>
           <p className="textname">{name}</p>
           <div className="iconbtn">
           <button onClick={onRemoveUser} className="searchBtn"></button>
           {/* <i class="fa-solid fa-arrow-pointer fa-xl icon"></i> */}
           
           
           </div>
        </div>
       </li>
    )
}
export default GoogleSearch;
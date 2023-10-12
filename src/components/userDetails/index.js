const UsersDetalis=(props)=>{
    const {eachinitialUserDetailsList,onDelete} = props
    const {imageUrl,name,role,uniqueNo} = eachinitialUserDetailsList
    const onRemoveUser=()=>{
        onDelete(uniqueNo)
    }
    return(
       <li className="list-item d-flex flex-column justify-content-center  align-items-center">
           <img src={imageUrl}/>
           <h2>{name}</h2>
           <h2>{role}</h2>
           <button onClick={onRemoveUser}>
            <img src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
            style={{height:"50px",width:"50px"}}/>
           </button>
       </li>
    )
}
export default UsersDetalis;
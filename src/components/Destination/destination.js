import './destination.css';
const DestinationSearch =(props)=>{
    const {initialDestinationsList} = props
    const {imgUrl,name} = initialDestinationsList
    
    return(
       <li className="list-item d-flex flex-column justify-content-center  align-items-cente">
    <div className='card-user-card-container'>
           <img src={imgUrl} className="img1"/>
           </div>
           <h2>{name}</h2>
           
           
       </li>
    )
}
export default DestinationSearch;
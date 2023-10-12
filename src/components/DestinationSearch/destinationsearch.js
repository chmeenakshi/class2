import { useState } from "react";
import DestinationSearch from "../Destination/destination";
import './destinationsearch.css';

const initialDestinationsList = [
    {
        uniqueNo: 1,
      name: 'Melaka Mosque',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
    },
    {
        uniqueNo: 2,
      name: 'Shrubland',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
    },
    {
        uniqueNo: 3,
      name: 'New York',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
    },
    {
        uniqueNo: 4,
      name: 'Escarpment',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
    },
    {
        uniqueNo: 5,
      name: 'Westminster Abbey',
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
    },
    {
        uniqueNo: 6,
      name: 'South Downs National Park',
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
    },
    {
        uniqueNo: 7,
      name: 'National Historic Site',
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
    },
    {
        uniqueNo: 8,
      name: 'Tower Bridge',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
    },
    {
        uniqueNo: 9,
      name: 'Arc Here',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
    },
    {
        uniqueNo: 10,
      name: 'Steeple',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
    },
    
  ]
  function Destination(){
    const [data,setdata]=useState('')
    const [userList,setuserList] = useState(initialDestinationsList);
    const onChangeUserText=(e)=>{
        setdata(e.target.value)
        const filteredUserList = initialDestinationsList.filter((user)=>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setuserList(filteredUserList );
    }
    return(
        <div className="destination-cont">
            <h1 >Destination Search</h1>
            <div className="dest-container">
            <img src="https://assets.ccbp.in/frontend/react-js/search-img.png"className="search-icon" alt="search" />
            <input type='search' onChange={onChangeUserText} />
            <ul className="img2">
                {userList.map((each)=>(
                    <DestinationSearch
                    initialDestinationsList={each}
                    key={each.uniqueNo}
                    />
                ))}
            </ul>
        </div>
        </div>
    )
}


export default Destination;
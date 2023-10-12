import UsersDetalis from './userDetails/index';
import {useState} from 'react';
const initialUserDetailsList = [
    {
      uniqueNo: 1,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
      name: 'Esther Howard',
      role: 'Software Developer'
    },
    {
      uniqueNo: 2,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
      name: 'Floyd Miles',
      role: 'Software Developer'
    },
    {
      uniqueNo: 3,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
      name: 'Jacob Jones',
      role: 'Software Developer'
    },
    {
      uniqueNo: 4,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
      name: 'Devon Lane',
      role: 'Software Developer'
    }
  ]
  
function Users(){
    const [data,setdata]=useState('')
    const [userList,setuserList] = useState(initialUserDetailsList);
    const onChangeUserText=(e)=>{
        setdata(e.target.value)
        const filteredUserList = initialUserDetailsList.filter((user)=>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setuserList(filteredUserList );
    }
    const onDeleteUser=uniqueNo=>{
        const removedItemList=userList.filter(each => each.uniqueNo !== uniqueNo)
        setuserList(removedItemList)
    }
    console.log(data);
    console.log(userList);
    return(
        <div>
            <h1>Users List</h1>
            <input type='search' onChange={onChangeUserText}/>
            {userList.map((each)=>(
                    <UsersDetalis
                    eachinitialUserDetailsList={each}
                    key={each.uniqueNo}
                    onDelete={onDeleteUser}
                    />
            ))}
        </div>
    ) 
}
export default Users;
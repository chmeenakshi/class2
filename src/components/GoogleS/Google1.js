import { useState } from "react";
import GoogleSearch from './GoogleSearch'

const initialUserDetailsList = [
    {
    uniqueNo: 1,
 
    name: 'Price of Ethereum',

    },
    {
    uniqueNo: 2,

    name: 'Oculus Quest 2 specs',

    },
    {
    uniqueNo: 3,
  
    name: 'Tesla Share Price',
  
    },
    {
    uniqueNo: 4,
  
    name: 'Price of Ethereum today',
 
    },
    {
       uniqueNo: 4,
     
       name: 'Latest trends in al',
    
       },
       {
           uniqueNo: 4,
         
           name: 'latest trends in ML',
        
           }
   ]
   function Google1(){
    const [userEnteredText,setuserEnteredText] = useState('');
    const [userList,setuserList] = useState(initialUserDetailsList);
    const onChangeUserText=(e)=>{
        setuserEnteredText(e.target.value)
        const filteredUserList = initialUserDetailsList.filter((userList)=>
        userList.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setuserList(filteredUserList );
    }
    const onDeleteUser=uniqueNo=>{
        const removedItemList=userList.filter(each => each.uniqueNo !== uniqueNo)
        setuserList(removedItemList)
    }
    return(
        <div className="app-Container"> 
            <div className="google-Conatiner">
            <img src="https://cdn.telanganatoday.com/wp-content/uploads/2022/04/Google-multisearch-tool-to-help-users-search-with-photos.jpg" className="logo"/>
            <div className="search2">
                <div className="searchMain">
            <i class="fa-solid fa-magnifying-glass fa-xl icon"></i>
             <input type='search' placeholder="search Google" onChange={onChangeUserText}/>
             </div>
            <ul className="googleUl"> 
                {userList.map((each)=>(
                    <GoogleSearch
                    initialUserDetailsList={each}
                    key={each.uniqueNo}
                    onDelete={onDeleteUser}
                    />
                ))}
            </ul>
        </div>
        </div>
        </div>
    )
}
export default Google1;

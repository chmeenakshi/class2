import { useState } from "react";
import TodosList from "../SimpleTodos/simpletodos";
import './index.css';
const initialUserDetailsList = [
    {
        uniqueNo: 1,
        name: 'Book the ticket for today evening',
    },
    {
        uniqueNo: 2,
        name: 'Rent the movie for tomorrow movie night',
    },
    {
        uniqueNo: 3,
        name: 'Confirm the slot for the yoga sesstion tomorrow morning',
    },
    {
        uniqueNo: 4,
        name: 'Drop the parcel at Bloomingdale',
    },
    {
        uniqueNo: 5,
        name: 'Order fruits on Big Baseket ',
    },
    {
        uniqueNo: 6,
        name: 'Fix the production issue',
    },
    {
        uniqueNo: 7,
        name: 'Confirm my slot for saturday night',
    },
    {
        uniqueNo: 8,
        name: 'Get essentials for sunday car wash',
    }
]

function Todos() {
    const [data, setdata] = useState("")
    const [todo, settodo] = useState(initialUserDetailsList)
    const onDeleteUser=uniqueNo=>{
        const removedItemList=todo.filter(each => each.uniqueNo !== uniqueNo)
        settodo(removedItemList)
    }
    return (
        <div className="todolist-container">
        <div className="todolist">
            <h1 style={{color:"red"}}>Simple Todos</h1>
            <div className='user-container'>
                {todo.map((each) => (
                    <TodosList
                        initialUserDetailsList={each}
                        key={each.uniqueNo}
                        onDelete={onDeleteUser}
                    />
                ))}
            </div>
        </div>
        /</div>
    )
}
export default Todos;
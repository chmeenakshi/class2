import './index.css';
function TodosList(props) {
    const { initialUserDetailsList, onDelete } = props
    const { uniqueNo, name } = initialUserDetailsList;
    const onRemoveUser = () => {
        onDelete(uniqueNo)
    }
    return (

        <div>
            <div className='sim-container'>
                <p>{name}</p>
                <button className="b1" onClick={onRemoveUser}>Delete</button>
            </div>
        </div>
    )
}
export default TodosList;
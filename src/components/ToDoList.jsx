import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../redux/todoSlice';

const ToDoList = () => {
  const { taskList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [ isEditing, setEditing ] = useState(false);
  const [ state, setState ] = useState({
   id: '', content: '', contentError: null
  });

  const onEditToggle = ( id, content) => {
   setEditing(true);
   setState({ ...state, id, content});
  }

  const handleChange = (e) =>{
   setState({...state, [e.target.name]: e.target.value,  
      [`${e.target.name}Error`]: null });
  }

  const { content, contentError, id } = state;
  const edit = () =>{
   if(content === ''){
    setState({...state, contentError: 'You must write something!'});
    return;
   }
   dispatch((editTask({content, id})));
   setEditing(false);
  }


return (
<>
 {
   isEditing ?
    <div className='form'>
      <h2>Update your plan for today</h2>
      <input type='text' value={content} name='content' 
         onChange={handleChange}>
      </input>
      <button type='button' className='button' 
        onClick={edit}>Edit
     </button>
     {contentError ? 
       <div className='error'>{contentError}</div>: null
     }
   </div> :
   <ul className='todos'>
    {
      taskList.map(({id, content})=> {
        return <li className='grid' key={id}>
          <span className='content'>{content}</span>
          <span className='todo-action'>  
            <button className="close" 
              onClick={() => dispatch(deleteTask({id}))}
            >Delete</button>
            <button className="edit" 
              onClick={() =>onEditToggle(id, content)} 
            > Edit
            </button>
           </span>
       </li>
     })
    }
  </ul>
  }
</>
)};

export default ToDoList;
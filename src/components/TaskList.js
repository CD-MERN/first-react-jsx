import {React, Component} from "react";

class TaskList extends Component{
    render(){
        const {title, tasks} = this.props;
        return <>
            <h4>
                {title}
            </h4>
            <ul>
                {tasks.map((item, index) =>  <li key={index}> {item}</li>)}
            </ul>
        </>
    }
    
}
export default TaskList;
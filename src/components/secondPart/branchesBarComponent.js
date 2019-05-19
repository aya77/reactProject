import React,{Component} from 'react';
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class BranchesBarComponent extends Component{

    render(){

      return (
        <div className ="row branchesBar ">
          <div className=" col-6 text-left pt-4 pl-5" >
          Select a  branch to jump into
          </div>
          <div  className=" col-6 text-right pt-4 pr-5" >
          <span>all branches
          <FontAwesomeIcon icon={faChevronDown} />

          </span>
         </div>
          </div>
      )


    }



}

export default BranchesBarComponent;

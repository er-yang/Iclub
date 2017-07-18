import React from 'react';
import './shot.less';
class Shot extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const {data}=this.props;
    return(
      <div className='main_full'>
      <ol className='shot_list'>
        <li className='shot'></li>
      </ol>
      </div>
    )

  }
}

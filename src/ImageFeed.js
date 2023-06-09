import React from 'react';
import RandomImageRow from './RandomImageRow';


export default class ImageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.no_of_row = 4;
    this.no_of_col = 3;
  }

  render() {
    return(
      <div className="mb-3 mx-1">
        {[...Array(this.no_of_row)].map((value, index) => {
          return (
            <div className="row row-cols" key={index} >
              <RandomImageRow no_of_col={this.no_of_col} />
              </div>
          )
        })}
        </div>
    )
  }
}
import React from 'react';
import RteForm from './RteForm';

class App extends React.Component {
  submit = (values) => {
    alert("Form values submitted");
    console.log(values);
  }
  render() {
    return (
      <div className="container">
        <h3>Redux Form Validation with RichTextEditor</h3>
        <RteForm onSubmit={this.submit} />
      </div>
      
    )
  }
}

export default App;

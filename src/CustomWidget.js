import * as React from 'react'

// Create simple, stateful React component
export default class CustomWidget extends React.Component {
  // Property to determine if the widget's UI is displaying
  //   updated by clicking on the widget button
  state = {
    open: false
  }
  /*
   Define toggleOpenClose method using arrow function
     arrow function is a common way of defining class methods in modern JS
     arrow functions do not have their own 'this' context
       so they inherit it from the surrounding scope making them suitable for class methods
   Note: `_` is a convention for a parameter that won't be used
     value of `open` is negated which means if state is `true`, it becomes `false`, and vice versa
*/
  toggleOpenClose = () => this.setState((state, _) => ({ open: !state.open }))

  render() {
    return(
      <div>
        <button
          onClick={this.toggleOpenClose}
          style={{ marginRight: '100%' }}
        >
         Widget
        </button>
        {this.state.open &&
          <div  
            style={{
              backgroundColor: 'white',
              padding: '20px',
              fontWeight: 'bold'
            }}
          >
            Custom react Map Widget!
          </div>
        }
      </div>
    )
  }
}

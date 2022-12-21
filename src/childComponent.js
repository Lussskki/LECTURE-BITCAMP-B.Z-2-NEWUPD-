function ChildComponent (props){
    console.log(props)
    return (
     <div style={{...styles.container,backgroundColor: props.color}}>
         My name is {props.name}
         </div>
    )
  }

export default ChildComponent

const styles = {
    container: {
      height: 100,
      width:100,
      backgroundColor: 'yellow',
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid' 
    }
  }
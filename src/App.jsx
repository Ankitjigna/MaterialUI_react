import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  let handleSubmit = ()=>{
    console.log("button was clicked")
  }

  return (
    <>
      <h2>Material UI Demo!!</h2>
      {/* <Button variant="contained" color='success' onClick={handleSubmit}>submit</Button>
      <Button variant="contained" color='error' >click me!</Button> */}
      <Button variant="contained" onClick={handleSubmit}  startIcon={<DeleteIcon /> } >click me2!</Button>
    </>
  )
}

export default App

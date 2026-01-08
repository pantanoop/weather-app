import TextField from '@mui/material/TextField';
import "./Navbar.css"
function Navbar({searchTerm,setSearchTerm}){
    return(<div>
        <TextField placeholder="🔍︎ Search for your city..." variant="outlined" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} fullwidth/>
    </div>)
}

export default Navbar;
import TextField from "@mui/material/TextField";

function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <TextField
      fullWidth
      placeholder="🔍 Search for your city..."
      variant="outlined"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      sx={{
        maxWidth: 600,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "12px",
      }}
    />
  );
}

export default Navbar;

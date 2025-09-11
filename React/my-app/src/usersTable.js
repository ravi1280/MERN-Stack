import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({rows}) => {
  return (
    <TableContainer component={"paper"}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
            {
           rows.length > 0 ? rows.map(row=>(
                <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                    <TableCell component={"th"} scope="row">{row.id}</TableCell>
                    <TableCell component={"th"} scope="row">{row.name}</TableCell>
                    <TableCell>
                    <Button variant="contained" color="primary" sx={{marginRight: 1}} onClick={()=>{}}>Update</Button>
                    <Button variant="contained" color="primary" sx={{marginRight: 1}} onClick={()=>{}}>Delete</Button>
                    </TableCell>
                </TableRow>
                
            )) : <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}    }>
                <TableCell colSpan={3} align="center">No users found</TableCell>
                </TableRow>
            }

        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UsersTable;

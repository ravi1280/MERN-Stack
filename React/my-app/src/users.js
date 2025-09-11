import { Box } from "@mui/material";
import UserForm from "./userForm";
import UsersTable from "./usersTable";

const users =[
    {id: 1, name: "John Doe"},
    {id: 2, name: "Jane Smith"},
    {id: 3, name: "Alice Johnson"},
]


const Users = () => {
  return (
    <Box sx={{
         padding: 4 ,
    width:'calc(100% - 100px)',
     margin: 'auto',
      marginTop: '100px' }}>
      <UserForm />
      <UsersTable rows={users} />
    </Box>
  );
  
}

export default Users;

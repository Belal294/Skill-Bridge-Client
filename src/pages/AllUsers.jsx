import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client"; 

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    authApiClient
      .get("/users")
      .then((res) => {
        console.log("userslist", res.data); 
        setUsers(res.data);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-base-200">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="capitalize">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

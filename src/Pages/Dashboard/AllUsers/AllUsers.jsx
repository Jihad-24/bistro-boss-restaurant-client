import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/users/${user._id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch()
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "User has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            });
    }

    return (
        <div>
            <SectionTitle
                subHeading={'---How many??---'}
                heading={'MANAGE ALL USERS'}
            ></SectionTitle>
            <div>
                <h2 className="text-3xl mb-4 font-semibold">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead >
                        <tr className="bg-[#D1A054] text-white">
                            <th></th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.role === 'admin' ? 'Admin' :
                                    <button onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-ghost btn-sm text-xl text-white bg-[#D1A054]">
                                        <FaUsers></FaUsers>
                                    </button>}
                            </td>
                            <td>
                                <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-sm text-xl text-white bg-red-700">
                                    <RiDeleteBin6Line />
                                </button>
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
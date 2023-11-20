import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <SectionTitle
                subHeading={"---At a Glance!---"}
                heading={'PAYMENT HISTORY'}
            ></SectionTitle>
            <div>
                <h2>Total Payments: {payments?.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white">
                                <th></th>
                                <th>EMAIL</th>
                                <th>TRANSCTION ID</th>
                                <th>TOTAL PRICE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment,index) => <tr key={payment._id}>
                                    <td>{index + 1}</td>
                                    <td>{payment.email}</td>
                                    <td>{payment.transctionId}</td>
                                    <td className="text-left">${payment.price}</td>
                                    <td>{payment.status}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Icon from "../../../components/shared/Icon";

const Users = () => {
  const [users, setUsers] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/user")
      .then((res) => setUsers(res?.data?.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(users);

  return (
    <div className="w-full h-screen ">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="mb-4">
            <h1 className="text-3xl font-bolder leading-tight text-white">
              Websites
            </h1>
          </div>
          <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
            <div className="flex items-center py-2">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-searcg"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center py-2">
              {/* <button className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
                    Create new categories
                  </button> */}
            </div>
          </div>
          <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block w-full shadow overflow-x-auto border-b border-gray-200 border rounded-lg">
              <table className="min-w-full home ">
                <thead>
                  <tr className=" border-b border-gray-200 text-xs leading-4 text-white uppercase tracking-wider">
                    <th className="px-6 py-3 text-left font-medium">SL</th>
                    <th className="px-6 py-3 text-left font-medium">Image</th>
                    <th className="px-6 py-3 text-left font-medium">
                      Username
                    </th>
                    <th className="px-6 py-3 text-left font-medium">Name</th>{" "}
                    <th className="px-6 py-3 text-left font-medium">Email</th>
                    <th className="px-6 py-3 text-left font-medium">Type</th>
                    <th className="px-6 py-3 text-center font-medium">
                      Option
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {users &&
                    users?.map((cat, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-white">
                              {idx + 1}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-white">
                              <img
                                height={100}
                                width={100}
                                src={cat.photoUrl}
                                alt={cat?.name}
                                className="h-10 w-10 bg-[#ffffff20] hover:bg-[#ffffff40] ring-[10px] rounded-[8px] ring-[#ffffff20] hover:ring-[#ffffff40] object-cover object-center  cursor-pointer duration-300"
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-white">
                            <td>{cat?.username}</td>
                          </td>

                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span>{cat?.name}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span className="text-white">{cat?.email}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 uppercase">
                              {cat?.userType}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-white">
                            <Link to={cat?.url}>{cat?.url}</Link>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                            <button className="bg-green-600 px-3 py-1 text-white rounded-s-md">
                              <Icon iconName="FaPencilAlt" />
                            </button>
                            <button className="bg-cyan-600 px-3 py-1 text-whitblack">
                              <Icon iconName="FaEye" />
                            </button>
                            <button className="bg-red-500 px-3 py-1 text-white rounded-e-md">
                              <Icon iconName="FaTrashAlt " />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

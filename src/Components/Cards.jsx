import React, { useEffect, useState } from "react";

const Cards = () => {
  const [user, setUser] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch("https://randomuser.me/api/", {
      dataType: "json",
    });
    const result = await response.json();
    setUser(result.results);
    console.log(result);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="h-[100vh] w-full flex items-center justify-center flex-col gap-4">
      <button
        onClick={fetchUsers}
        className="bg-cyan-500 py-[20px] px-[40px] rounded-md"
      >
        Get random user
      </button>

      {user.length > 0 && (
        <div className=" flex items-center gap-2 h-[300px] w-[600px] justify-around">
          <img
            src={user[0].picture.large}
            alt=""
            className="h-[250px] rounded"
          />
          <div className="h-[300px] flex flex-col gap-[3rem] py-[42px]">
            <div className="flex gap-2  ">
              <h1 className="text-lg font-bold">
                First Name : {user[0].name.first}
              </h1>
              <h1 className="text-lg font-bold">
                Last Name : {user[0].name.last}
              </h1>
            </div>
            <h1 className="text-lg font-bold">Gender : {user[0].gender}</h1>
            <h1 className="text-lg font-bold">
              Phone Number : {user[0].phone}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;

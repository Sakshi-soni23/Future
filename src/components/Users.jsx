import React from 'react'

const Users = () => {
  return (
    <>
      <div className="flex space-x-3.5 mt-6 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className="avatar avatar-online ml-4">
          <div className="w-14 rounded-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIyTZVXyb90oYHRiiX6YkNUc0CnzGwWjI3Q&s" />
          </div>
        </div>
        <div className="mt-1">
          <h1 className="text-[14px]">Sanvi sharma</h1>
          <span className="text-[10px]">sanu@gmail.com</span>
        </div>
      </div>
    </>
  );
}

export default Users
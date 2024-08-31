"use client";
import React, { useState } from "react";

const page = () => {
  const [task, settask] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { task }]);
    settask("");
    console.log(mainTask);
  };

  const deletetask = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };
  let randerTask = (
    <h2 className="mt-4 text-red-500 text-[18px] font-bold">
      No Task Available!
    </h2>
  );

  if (mainTask.length > 0) {
    randerTask = mainTask.map((t, i) => {
      return (
        <div
          key={i}
          className="w-full px-4 py-3 rounded-md bg-[#0b1b3b] text-white flex items-center justify-between gap-3 my-5"
        >
          <h2>{t.task}</h2>
          <button
            onClick={() => {
              deletetask(i);
            }}
            className="bg-white text-red-500 rounded-sm font-bold px-4 py-[4px] "
          >
            Delete
          </button>
        </div>
      );
    });
  }
  return (
    <>
      <div className="w-full height p-5 main bg-emerald-900 flex items-center justify-center flex-col gap-8">
        <h1 className="text-white font-bold text-4xl">TODO LIST</h1>
        <div className="box pt-8 bg-white p-5 rounded-xl shadow-white shadow-md w-[100%] sm:w-[400px]">
          <form
            className="flex items-center justify-between gap-2"
            onSubmit={submitForm}
          >
            <input
              type="text"
              placeholder="Enter Your Task"
              className=" py-2 w-[78%] border-[#0b1b3b] border-[2px] outline-none pl-4 rounded-md text-[17px]"
              value={task}
              onChange={(e) => {
                settask(e.target.value);
              }}
            />

            <button className="bg-[#0b1b3b] py-[10px] rounded-md px-5 text-white font-[600] cursor-pointer">
              Add
            </button>
          </form>
          <div>{randerTask}</div>
        </div>
      </div>
    </>
  );
};

export default page;

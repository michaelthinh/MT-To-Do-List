import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../../store/todoSlice";

export default function ListActions() {
    const dispatch = useDispatch();
    const [enteredName, setEnteredName] = useState("");
    const [valid, setIsValid] = useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const inputChangeHandler = (e) => {
        setEnteredName(e.target.value);
        if (e.target.value.trim().length > 0) {
            setIsValid(true);
        }
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (valid) {
            const formData = {
                id: Math.random(),
                name: enteredName,
                active: true,
            };
            dispatch(todoActions.addTodo(formData));
            setShowModal(false);
            setEnteredName("");
            setIsValid(false);
        } else {
            setIsValid(false);
        }
    };
    return (
        <div className="border-t-2 border-[#7a4b4b] p-4 ">
            <button
                className="block bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                type="button"
                onClick={() => setShowModal(true)}
            >
                Add new things to do
            </button>
            {showModal ? (
                <form>
                    <div className="justify-center items-center flex w-2xl  fixed inset-0 z-50  focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Add New To Do
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="p-6 flex-auto">
                                    <label
                                        htmlFor="todo"
                                        className="block mb-4"
                                    >
                                        Your work
                                    </label>
                                    <input
                                        name="todo"
                                        id="todo"
                                        className="w-full p-2"
                                        placeholder="Enter your job here"
                                        defaultValue=""
                                        onChange={inputChangeHandler}
                                        required
                                    />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                        onClick={submitHandler}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </form>
            ) : null}
        </div>
    );
}

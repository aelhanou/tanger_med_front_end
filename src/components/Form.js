import { Add } from "pages/AddPage/AddPageSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { MySelect } from "./MySelect";




export const Form = ({ data, endPoint, selectOption }) => {

    let dispatch = useDispatch()
    const handleSubmit = (e) => {
        let obj = {}
        e.preventDefault();
        Array.from(e.target).map(({ name, value }) => value != '' && (obj = { ...obj, ...{ [name]: value } })).filter(e => e)
        let data = [obj, endPoint]
        dispatch(Add(data))
    }

    return (
        <>
            <div className="w-full max-w-xs ">
                <form id="myForm" onSubmit={(e) => handleSubmit(e)} className="flex flex-col  items-center bg-white shadow-md overflow-scroll h-96 overflow-x-hidden rounded px-8 pt-6 pb-8 mb-4">
                    {data.map(e => {
                        return (
                            <div key={e} className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    {e}
                                </label>
                                <input name={e} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder={e} />
                            </div>
                        )
                    })}
                    {selectOption && selectOption.map(e => {
                        return (
                            <MySelect  key={e} options={e} />
                        )
                    })}


                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
import React from "react"


export const MySelect = ({ options }) => {
    return (
        <>
            <div className="flex w-[100%] justify-center">
                <div className="mb-3 xl:w-96">
                    <select className="form-select form-select-lg mb-3
                                        appearance-none
                                        block
                                        w-full
                                        px-4
                                        py-2
                                        text-xl
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding bg-no-repeat
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example">
                        {options && options.map(e =>  <option key={e} value={e}>{e}</option>)}
                    </select>
                </div>
            </div>
        </>
    )
}
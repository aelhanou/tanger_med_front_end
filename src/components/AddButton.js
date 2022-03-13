import { useState } from "react";
import { Form } from "./Form"
import { MyModal } from "./MyModal"

const { Button } = require("@material-tailwind/react")



export const AddButton = ({ name, data, endPoint }) => {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <div className="flex justify-center items-center w-[200px] h-24  rounded-xl bg-white ">
                <Button
                    onClick={() => setShowModal(true)}
                    className="w-[140px] h-16">{name}</Button>
            </div>
            <MyModal setShowModal={setShowModal} showModal={showModal} title={name} >
                <Form data={data} endPoint={endPoint} />
            </MyModal>
        </>
    )
}
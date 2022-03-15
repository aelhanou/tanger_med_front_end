import { AddButton } from "components/AddButton";


export const AddPage = () => {
    return (
        <>
            <div className="flex justify-center  w-full mb-96 ">
                <div className="flex flex-wrap justify-center mt-4 gap-3  w-[90%]">
                    <AddButton name="Category" endPoint="addCategorie" selectOption={[]} data={["name", "description"]} />
                    <AddButton name="Block" endPoint="addBlock" selectOption={[["option1", "option2"], ["option11", "option22"]]} data={["idStorageArea", "idCategories"]} />
                    <AddButton name="Block_Part" endPoint="addBlock_Part" selectOption={[]} data={["x_index", "y_index", "z_index", "idBlock", "idContainers"]} />
                    <AddButton name="Container" endPoint="addContainer" selectOption={[]} data={["reference", "weight", "dimensions", "brand", "serviceDate", "importStatus", "customFeesStatus", "certificat", "idSupplier", "idShip", "idTruck", "idCategorie", "idBlock_Part"]} />
                    <AddButton name="CustomFees" endPoint="addCustomFee" selectOption={[]} data={["amount", "description", "idCategories"]} />
                    <AddButton name="Driver" endPoint="addDriver" selectOption={[]} data={["name", "age", "driverLicenseIndex"]} />
                    <AddButton name="Quay" endPoint="addQuay" selectOption={[]} data={["reference", "status", "idReservation", "idPort", "idTYpe"]} />
                    <AddButton name="Ship" endPoint="addShip" selectOption={[]} data={["name", "capacity", "nationality", "type", "idShipOwner"]} />
                    <AddButton name="ShipOwner" endPoint="addShipOwner" selectOption={[]} data={["name", "email", "phone", "description", "nationality"]} />
                    <AddButton name="StorageArea" endPoint="addStorageArea" selectOption={[]} data={["name"]} />
                    <AddButton name="System" endPoint="" selectOption={[]} data={["name", "description", "storageDeadline", "lateShippingFee", "capacityPerQuais", "quaisFeePerDay"]} />
                    <AddButton name="Truck" endPoint="addTruck" selectOption={[]} data={["matricule", "status", "idContainer", "idUser", "idDriver", "idCommunicationsChannel"]} />
                    <AddButton name="Type" endPoint="addType" selectOption={[]} data={["name", "description"]} />
                </div>
            </div>
        </>
    );
}

import { AddButton } from "components/AddButton";

export const AddPage = () => {

    return (
        <>
            <div className="flex justify-center w-full h-[80vh] ">
                <div className="flex flex-wrap  mt-4 gap-3  w-[90%]">
                    <AddButton name="Category" endPoint="addCategorie" data={["name", "description"]} />
                    <AddButton name="Block" endPoint="" data={["idStorageArea", "idCategories"]} />
                    <AddButton name="Block_Part" endPoint="" data={["x_index", "y_index", "z_index", "idBlock", "idContainers"]} />
                    <AddButton name="Container" endPoint="" data={["reference", "weight", "dimensions", "brand", "serviceDate", "importStatus", "customFeesStatus", "certificat", "idSupplier", "idShip", "idTruck", "idCategorie", "idBlock_Part"]} />
                    <AddButton name="CustomFees" endPoint="" data={["amount", "description", "idCategories"]} />
                    <AddButton name="Driver" endPoint="" data={["name", "age", "driverLicenseIndex"]} />
                    <AddButton name="Quay" endPoint="" data={["reference", "status", "idReservation", "idPort", "idTYpe"]} />
                    <AddButton name="Ship" endPoint="" data={["name", "capacity", "nationality", "type", "idShipOwner"]} />
                    <AddButton name="ShipOwner" endPoint="" data={["name", "email", "phone", "description", "nationality"]} />
                    <AddButton name="StorageArea" endPoint="" data={["name"]} />
                    <AddButton name="System" endPoint="" data={["name", "description", "storageDeadline", "lateShippingFee", "capacityPerQuais", "quaisFeePerDay"]} />
                    <AddButton name="Truck" endPoint="" data={["matricule", "status", "idContainer", "idUser", "idDriver", "idCommunicationsChannel"]} />
                    <AddButton name="Type" endPoint="" data={["name", "description"]} />
                </div>
            </div>
        </>
    );
}

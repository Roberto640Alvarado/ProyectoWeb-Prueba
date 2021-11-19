const Alert = () => {

    return (
        <div>
            <div className="border-red-400 text-red-700 px-8 py-3 rounded relative bg-red-100 border mt-4" role="alert">
                <strong className="font-bold">Error </strong>
                <h3 className="block sm:inline">Ingrese todos los datos</h3>
                <span className="absolute top-0 bottom-0 right-0 px-1 py-3">
                    <button className="h-6 w-6 text-gray-100 rounded-full bg-red-600" >X</button>
                </span>
            </div>
        </div>
    );

}
export default Alert;
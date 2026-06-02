const RecommendationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-xl">

                <h2 className="text-2xl font-bold mb-4">
                    Recomendación ☕
                </h2>

                <p className="mb-4">
                    Te recomendamos probar el Café Latte con pastel de chocolate 🍰
                </p>

                <button
                    onClick={onClose}
                    className="bg-amber-800 text-white px-4 py-2 rounded-lg"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default RecommendationModal;
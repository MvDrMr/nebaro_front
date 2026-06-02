import { useState } from "react";
import MainLayout from "../components/Layout/MainLayout";
import RecommendationModal from "../components/Modal/RecommendationModal";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <MainLayout>
            <div className="flex flex-col items-center justify-center py-20">

                <h1 className="text-5xl font-bold mb-6">
                    Bienvenido ☕
                </h1>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-amber-700 text-white px-6 py-3 rounded-xl"
                >
                    Ver recomendación
                </button>

                <RecommendationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </MainLayout>
    );
};

export default Home;
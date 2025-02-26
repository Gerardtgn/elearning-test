import shape8 from '../../assets/img/shape/shape8.svg';
export default function Titre({page, titre}){
    return (
        <>
        <header className="bg-white shadow-sm">
            <div className="container mx-auto py-4 px-6">
                <h1 className="text-3xl font-bold" style={{ color: "#fe4a55" }}>{page}</h1>
                <p className="text-gray-600 mt-2">{titre}</p>
            </div>
        </header>
        </>
    );
}
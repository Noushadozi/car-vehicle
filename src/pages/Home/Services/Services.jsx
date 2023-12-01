import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    const services = useServices(asc, search);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText)
        console.log(searchText);
    }

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <form onSubmit={handleSearch}>
                    <input type="text" name="search" id="" />
                    <input type="submit" value="search" className="btn" />
                </form>
                <button
                    className="btn btn-secondary mt-3"
                    onClick={() => setAsc(!asc)}>
                    {
                        asc ? "Price high to low" : "Price low to high"
                    }
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
import Image from "next/image";
import { useState } from "react";

const materials = [
    {
        id: 1,
        name: "Oak Wood",
        swatch: "/images/oak-wood.avif",
        description: "Premium quality oak with natural grain patterns",
        category: "Flooring",
        price: "$45/sq ft"
    },
    {
        id: 2,
        name: "Marble",
        swatch: "/images/marble.avif",
        description: "Italian Carrara marble with elegant veining",
        category: "Countertops",
        price: "$120/sq ft"
    },
    {
        id: 3,
        name: "Concrete",
        swatch: "/images/concrete.jpg",
        description: "Polished concrete for modern industrial look",
        category: "Flooring/Walls",
        price: "$35/sq ft"
    },
    {
        id: 4,
        name: "Glass Tile",
        swatch: "/images/glass-tile.webp",
        description: "Handcrafted glass tiles in various colors",
        category: "Backsplash",
        price: "$28/sq ft"
    },
    {
        id: 5,
        name: "Brass",
        swatch: "/images/brass.jpg",
        description: "Antique brass fixtures and hardware",
        category: "Hardware",
        price: "Varies by item"
    },
    {
        id: 6,
        name: "Granite",
        swatch: "/images/granite.webp",
        description: "Durable natural stone with unique mineral patterns",
        category: "Countertops",
        price: "$85/sq ft"
    }
];

export default function MaterialSelector() {
    const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);

    return (
        <section className="material-selector">
            <div className="material-selector__header">
                <h1 className="material-selector__title">SELECT YOUR PREMIUM BUILDING MATERIALS</h1>
                <p className="material-selector__description">
                    Choose from our curated collection of high-quality materials to
                    customize your architectural vision. Each material is sustainably
                    sourced and hand-selected by our design team.
                </p>
            </div>

            <div className="material-selector__content">
                <div className="material-selector__info">
                    {selectedMaterial ? (
                        <div className="material-detail">
                            <h3 className="material-detail__name">{selectedMaterial.name}</h3>
                            <p className="material-detail__description">{selectedMaterial.description}</p>
                            <p className="material-detail__meta"><strong>Category:</strong> {selectedMaterial.category}</p>
                            <p className="material-detail__meta"><strong>Price:</strong> {selectedMaterial.price}</p>
                        </div>
                    ) : (
                        <div className="material-placeholder">
                            <p>Select a material to view details</p>
                        </div>
                    )}
                </div>

                <div className="material-selector__preview">
                    <div className="material-preview__frame">
                        {selectedMaterial ? (
                            <Image
                                src={selectedMaterial.swatch}
                                alt={selectedMaterial.name}
                                width={600}
                                height={400}
                                className="material-preview__image"
                            />
                        ) : (
                            <div className="material-preview__placeholder">
                                <p>Material preview will appear here</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="material-selector__grid">
                {materials.map(material => (
                    <div
                        key={material.id}
                        onClick={() => setSelectedMaterial(material)}
                        className={`material-card ${selectedMaterial?.id === material.id ? 'material-card--selected' : ''}`}
                    >
                        <div className="material-card__image">
                            <Image
                                src={material.swatch}
                                alt={material.name}
                                width={100}
                                height={100}
                                className="material-card__swatch"
                            />
                        </div>
                        <h4 className="material-card__name">{material.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}
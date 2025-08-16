'use client'

import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

export default function PanoramaViewer() {

    return (
        <section className="panorama-section">
            <div className="panorama-container">
                <h2 className="panorama-title">360° PROJECT VIEWER</h2>
                <p className="panorama-description">
                    Explore our architectural designs in immersive 360-degree detail
                </p>

                <div id="viewer-container" className="panorama-viewer">
                    <ReactPhotoSphereViewer
                        src="/images/after.jpg"
                        height={"100vh"}
                        width={"100%"}
                    ></ReactPhotoSphereViewer>
                </div>

                <div className="panorama-controls-info">
                    <p>Drag to rotate • Scroll to zoom • Click buttons for controls</p>
                </div>
            </div>
        </section>
    );
}
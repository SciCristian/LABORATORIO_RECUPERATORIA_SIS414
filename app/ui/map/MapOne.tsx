"use client";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/jsvectormap.css";
import React, { useEffect } from "react";
import "./js/us-aea-en";
import "./js/world";
import "./js/world_merc";

const MapOne = () => {
    const markers = [
        { name: "Egypt", coords: [26.8206, 30.8025] },
        { name: "Russia", coords: [61.524, 105.3188] },
        { name: "Canada", coords: [56.1304, -106.3468] },
        { name: "Greenland", coords: [71.7069, -42.6043] },
        { name: "Australia", coords: [-25.2744, 133.7751] },
        { name: "China", coords: [35.8617, 104.1954] },
        { name: "United States", coords: [37.0902, -95.7129] },
        { name: "India", coords: [20.5937, 78.9629] },
        { name: "Indonesia", coords: [-0.7893, 113.9213] },
        { name: "South Africa", coords: [-30.5595, 22.9375] },
        { name: "Bolivia", coords: [-16.2902, -63.5887] },
    ];
    const colorPalette = [
        "#FF5733", // Red
        "#33FF57", // Green
        "#3357FF", // Blue
        "#FF33A1", // Pink
        "#FF8C33", // Orange
        "#33FFF5", // Cyan
        "#8D33FF"  // Purple
    ];

    useEffect(() => {
        const mapOne = new jsVectorMap({
            selector: "#mapOne",
            map: "world_merc",
            zoomButtons: true,

            regionStyle: {
                initial: {
                    fill: "#e0e0e0",
                },
                hover: {
                    fill: "#ff5050",
                }
            },

            labels: {
                markers: {
                    render: (marker: {
                        name: string;
                        coords: [number, number];
                    }) => marker.name
                }
            },
            lines: [{
                from: 'Bolivia',
                to: 'China',
                style: {
                    stroke: 'red',
                }
            }],
            markersSelectable: true,
            selectedMarkers: markers.map((marker, index) => {
                var name = marker.name;

                if (name === "Bolivia" || name === "China") {
                    return index;
                }
            }),
            markers: markers,
            markerStyle: {
                initial: { fill: colorPalette[Math.floor(Math.random() * colorPalette.length)] },
                selected: { fill: colorPalette[Math.floor(Math.random() * colorPalette.length)] }
            },
            markerLabelStyle: {
                initial: {
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: 13
                }
            }
        });

        return () => {
            const map = document.getElementById("mapOne");
            if (map) {
                map.innerHTML = "";
            }
            // mapOne.destroy();
        };
    }, []);

    return (
        <div className="col-span-12 h-[80vh] w-[70vw] mx-auto rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
            <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
                Region labels
            </h4>
            <div className="h-full w-full flex justify-center items-center">
                <div id="mapOne" className="mapOne h-full w-full"></div>
            </div>
        </div>
    );
};

export default MapOne;

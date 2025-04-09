'use client'
import { useEffect } from 'react'

export default function AddressMap() {
    useEffect(() => {
        // Load the Google Maps script
        const script = document.createElement('script')
        script.src = 'https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js'
        script.async = true
        script.type = 'module'
        document.head.appendChild(script)

        // Initialize map when script is loaded
        script.onload = () => {
            initMap()
        }

        return () => {
            document.head.removeChild(script)
        }
    }, [])

    const initMap = async () => {
        const CONFIGURATION = {
            "ctaTitle": "Checkout",
            "mapOptions": {
                "center": { "lat": 37.4221, "lng": -122.0841 },
                "fullscreenControl": true,
                "mapTypeControl": false,
                "streetViewControl": true,
                "zoom": 12,
                "zoomControl": true,
                "maxZoom": 22,
                "mapId": ""
            },
            "mapsApiKey": "AIzaSyDxaEHfX0UW4KL91Lq2C84GxN_QRNaFWgI",
            "capabilities": {
                "addressAutocompleteControl": true,
                "mapDisplayControl": true,
                "ctaControl": true
            }
        }

        const SHORT_NAME_ADDRESS_COMPONENT_TYPES = new Set(['street_number', 'administrative_area_level_1', 'postal_code'])
        const ADDRESS_COMPONENT_TYPES_IN_FORM = ['location', 'locality', 'administrative_area_level_1', 'postal_code', 'country']

        function getFormInputElement(componentType) {
            return document.getElementById(`${componentType}-input`)
        }

        function fillInAddress(place) {
            function getComponentName(componentType) {
                for (const component of place.address_components || []) {
                    if (component.types[0] === componentType) {
                        return SHORT_NAME_ADDRESS_COMPONENT_TYPES.has(componentType) ?
                            component.short_name :
                            component.long_name
                    }
                }
                return ''
            }

            function getComponentText(componentType) {
                return (componentType === 'location') ?
                    `${getComponentName('street_number')} ${getComponentName('route')}` :
                    getComponentName(componentType)
            }

            for (const componentType of ADDRESS_COMPONENT_TYPES_IN_FORM) {
                getFormInputElement(componentType).value = getComponentText(componentType)
            }
        }

        function renderAddress(place) {
            const mapEl = document.querySelector('gmp-map')
            const markerEl = document.querySelector('gmp-advanced-marker')

            if (place.geometry && place.geometry.location) {
                mapEl.center = place.geometry.location
                markerEl.position = place.geometry.location
            } else {
                markerEl.position = null
            }
        }

        try {
            const { Autocomplete } = await google.maps.importLibrary('places')
            const mapOptions = CONFIGURATION.mapOptions
            mapOptions.mapId = mapOptions.mapId || 'DEMO_MAP_ID'
            mapOptions.center = mapOptions.center || { lat: 37.4221, lng: -122.0841 }

            await customElements.whenDefined('gmp-map')
            document.querySelector('gmp-map').innerMap.setOptions(mapOptions)
            const autocomplete = new Autocomplete(getFormInputElement('location'), {
                fields: ['address_components', 'geometry', 'name'],
                types: ['address'],
            })

            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace()
                if (!place.geometry) {
                    window.alert(`No details available for input: '${place.name}'`)
                    return
                }
                renderAddress(place)
                fillInAddress(place)
            })
        } catch (error) {
            console.error('Error initializing map:', error)
        }
    }

    return (
        <div className="map-container" style={{ height: '500px', width: '100%' }}>
            <gmpx-api-loader key="AIzaSyDxaEHfX0UW4KL91Lq2C84GxN_QRNaFWgI" solution-channel="GMP_QB_addressselection_v4_cABC">
            </gmpx-api-loader>
            <gmpx-split-layout row-layout-min-width="600">
                <div className="panel" slot="fixed">
                    <div>
                        <img className="sb-title-icon" src="https://fonts.gstatic.com/s/i/googlematerialicons/location_pin/v5/24px.svg" alt="Location pin icon" />
                        <span className="sb-title">Address Selection</span>
                    </div>
                    <input type="text" placeholder="Address" id="location-input" />
                    <input type="text" placeholder="Apt, Suite, etc (optional)" />
                    <input type="text" placeholder="City" id="locality-input" />
                    <div className="half-input-container">
                        <input type="text" className="half-input" placeholder="State/Province" id="administrative_area_level_1-input" />
                        <input type="text" className="half-input" placeholder="Zip/Postal code" id="postal_code-input" />
                    </div>
                    <input type="text" placeholder="Country" id="country-input" />
                    <gmpx-icon-button variant="filled">Checkout</gmpx-icon-button>
                </div>
                <gmp-map slot="main">
                    <gmp-advanced-marker></gmp-advanced-marker>
                </gmp-map>
            </gmpx-split-layout>
            <style jsx>{`
                .map-container {
                    margin: 20px 0;
                    border-radius: 8px;
                    overflow: hidden;
                }
                .panel {
                    background: white;
                    box-sizing: border-box;
                    height: 100%;
                    width: 100%;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                }
                .half-input-container {
                    display: flex;
                    justify-content: space-between;
                }
                .half-input {
                    max-width: 120px;
                }
                input {
                    height: 30px;
                    border: 0;
                    border-bottom: 1px solid black;
                    font-size: 14px;
                    font-family: Roboto, sans-serif;
                    font-style: normal;
                    font-weight: normal;
                }
                input:focus::placeholder {
                    color: white;
                }
                .sb-title {
                    position: relative;
                    top: -12px;
                    font-family: Roboto, sans-serif;
                    font-weight: 500;
                }
                .sb-title-icon {
                    position: relative;
                    top: -5px;
                }
            `}</style>
        </div>
    )
} 
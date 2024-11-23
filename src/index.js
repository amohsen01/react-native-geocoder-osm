/**
 * This package for Geocoding
 * @author rangga darmajati <rangga.android69@gmail.com>
 * @since april 2020
 * @copyright rangga darmajati
 * @license MIT
 */

import { apiUrl } from '../src/services/httpClient';

class GeocoderOsm {
    getGeoCodePosition(lat, lng) {
        let apiuri = apiUrl.osm + `&q=${lat},${lng}`;
        const requestOptions = {
            method: 'GET',
            headers: {
                // Example headers (add actual headers if required)
                'Accept': 'application/json',
            }
        };

        // Print request headers
        console.log("Request Headers:", Array.from(new Headers(requestOptions.headers).entries()));

        return fetch(`${apiuri}`, requestOptions)
            .then((response) => {
                // Print all response headers
                console.log("Response Headers:", Array.from(response.headers.entries()));

                return response.json();
            })
            .catch((e) => {
                console.error(e);
                return e;
            });
    }

    getGeoAddress(place) {
        let apiuri = apiUrl.osm + `&q=${place}`;
        const requestOptions = {
            method: 'GET',
            headers: {
                // Example headers (add actual headers if required)
                'Accept': 'application/json',
            }
        };

        // Print request headers
        console.log("Request Headers:", Array.from(new Headers(requestOptions.headers).entries()));

        return fetch(`${apiuri}`, requestOptions)
            .then((response) => {
                // Print all response headers
                console.log("Response Headers:", Array.from(response.headers.entries()));

                return response.json();
            })
            .catch((e) => {
                console.error(e);
                return e;
            });
    }
}


module.exports = new GeocoderOsm

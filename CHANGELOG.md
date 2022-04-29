# Changelog

All notable changes to this project will be documented in this file.


 - [x] Support for all Map options
 - [x] Support for all Marker options
 - [x] Support for all Tile Layer options
 - [x] Cleanup Map, Marker and TileLayer (with return from useEffect) 









### 0.1.0 (2019-12-10)

Note: Changes made to verion 0.1.0 and prior were from a different author: [kontrollanten/preact-leaflet](https://github.com/kontrollanten/preact-leaflet). This repo has been forked and modified.
### Features

* **Map:** add support for all leaflet Map options 
* **Map:** add support for event listeners 
* **Map:** add support for passing bounds prop
* **Map:** add support to update center position
* **Map:** add support to update zoom 
* **Map:** set default zoom to 6 
* **Marker:** add support for markers 
* **MarkerCluster:** add marker cluster support 
* **Polyline:** add Polyline support 
* **ZoomControl:** add ZoomControl support 


### Bug Fixes

* make preact X compat 
* **deps:** update dependency preact to v10 
* **eslint:** v18 config 
* add displayName to components 
* **demo:** set accurate title 
* **Layer:** log error instead of throw exception 
* **leaflet:** use named import from leaflet 
* **Map:** prevent render null children 
* **Map:** remove default center value 

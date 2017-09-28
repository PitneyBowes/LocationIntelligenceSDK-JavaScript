## 3.7.0 - 2017-09-28
Location by IP Address -Returns the location coordinates corresponding to the IP Address. The service is available globally.

Location by Wifi Access Point MAC Address

Returns the location coordinates corresponding to the MAC Address of WIfi Access Point. This service is also available globally.
Location by Fixed Line Number

Returns the location coordinates corresponding to the fixed line phone number. This service is available for US fixed line numbers.
Location by Wireless Number

Returns the location coordinates corresponding to the wireless phone number. This service is available for US wireless phone numbers.
This service needs approval from wireless carriers as well as the mobile user and therefore has got 4 methods to enable the location check.


## 3.6.0 - 2017-08-18
- GeoSearch API - Support for Multi-Line text search
   -Three new parameters are added to the GeoSearch API request. Addition of these parameters supports limiting address search to a state, city, and postcode for more relevant results.

- GeoTax API - New Insurance Premium Districts (IPD) Endpoints Added
  -GET IPD TaxRate - Returns the IPD tax details pertaining to the region in which the input address belongs.
	-POST IPD TaxRate - Returns the IPD tax details pertaining to the region based on the multiple addresses provided as input.

- GeoTime API - Capture detailed timezone information.
  -GeoTime API is available globally. GeoTime API has following endpoints:
  -GET Timezone By Address
  -GET Timezone By Location

- GeoEnrich API - Existing GeoEnhance API renamed to GeoEnrich
 -The GeoEnhance API is renamed to GeoEnrich. GeoEnrich API returns addresses, place names, and business listings with the input of a location coordinate.
 -Timezone By Location endpoint is removed from GeoEnrich API (previously known as GeoEnhance) and made available in GeoTime API.
 
## 3.5.0 - 2017-06-29
- GeoProperty API - Capture detailed property information for analysis, planning, and decisions
- GeoRisk API  - New Endpoints Added
- GeoSearch API  - Support for IP based location
- GeoCode API  - Added Support to Fetch PBKey from Addresses
- GeoCode API -  Multiple Enhancements
- GeoTax API -   Provision for a Unique 'objectId' in POST Requests

## 3.0.0 - 2017-03-24
- Changes for GeoEnhance
- Added new API GeoRisk
- Added new API GeoRoute
- Added new API GeoZone

## 2.6.0 - 2016-12-19
- Changes for Geosearch

## 2.5.0 - 2016-10-03
- Changes for GeoComm API.
- Changes for AHJ Geo911.
- Changes for GeoTaxBatch
- Model Definition update.


## 2.0.0 - 2016-07-04

### Added
- Added 2.0 Version of Java SDK which has Location Intelligence API features GeoEnhance,GeoLife,GeoSearch,Geo911,GeoTax and Geocode.

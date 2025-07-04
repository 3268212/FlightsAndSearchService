const {FlightRepository, AirplaneRepository} = require('../repository/index');
const { compareTime } = require('../utils/helper');
class FlightService {
     constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
     }
    async createFlight(data){
        try{
           if(!compareTime(data.arrivalTime, data.departureTime)){
               throw {error:'Arrival time cannot be less than departure time'}
           }
           console.log(data);
           const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
           console.log("Retrieved Airplane:", airplane);

           const flight = await this.flightRepository.createFlight({
               ...data,
               totalSeats: airplane.capacity
           });
           return flight;    
        }catch(error){
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllFlightsData(data){
          try{
             const flights = await this.flightRepository.getAllFlights(data);
             return flights;
          }catch(error){
              console.log("Something went wrong at service layer");
              throw {error};
          }
    }

    async getFlightById(flightId){
        try{
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw {error};

        }
    }

    async updateFlight(flightId, data){
          try{
           const response = await this.flightRepository.updateFlight(flightId,data);
            return response;
          }catch(error){
            console.log("Something went wrong at service layer");
            throw {error};
          }
    }
}

module.exports = FlightService;
/**
 * {
 *     flightNumber,
 *     airplaneId,
 *     departureAirportId,
 *     arrivalAirportId,
 *     arrivalTime,
 *     departureTime,
 *     price,
 *     totalSeats -> airplanes
 * }
 */


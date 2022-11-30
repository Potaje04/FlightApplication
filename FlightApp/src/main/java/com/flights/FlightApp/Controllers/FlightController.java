package com.flights.FlightApp.Controllers;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flights.FlightApp.Helper.Validator;
import com.flights.FlightApp.Service.FlightService;
import com.flights.FlightApp.Types.Flights;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("flights")
public class FlightController {
	
	@Autowired
	private FlightService fService;
	
	Logger log = LoggerFactory.getLogger(getClass());
	
	@GetMapping("/")
	public List<Flights> findAllFlights(){
		log.info("Getting all flights");
		return fService.findAllFlights();
	}
	
	@GetMapping("{id}")
	public Flights findFlightById(@PathVariable int id) {
		log.info("Getting flight with id " + id);
		
		return fService.findFlightByid(id);
	}
	
	@GetMapping("/date")
	public List<Flights> findFlightByDate(@RequestBody Date date) {
		log.info("Getting flights with the date " + date.toString());
		
		return fService.findFlightsByDate(date);
	}
	
	@GetMapping("/origin/{origin}")
	public List<Flights> findFlightsByOrigin(@PathVariable String origin){
		log.info("Getting flights with the origin " + origin);
		
		return fService.findFlightsByOrigin(origin);
	}
	
	@GetMapping("/destination/{destination}")
	public List<Flights> findFLightsByDestination(@PathVariable String destination){
		log.info("Getting flights with the destination "+ destination);
		
		return fService.findFlightsByDestination(destination);
	}
	
	@GetMapping("/airline/{airline}")
	public List<Flights> findFLightsByAirline(@PathVariable String airline){
		log.info("Getting flights with the airline "+ airline);
		
		return fService.findFlightsByAirline(airline);
	}
	
	@GetMapping("/price/{price}")
	public List<Flights> findFLightsByPrice(@PathVariable int price){
		log.info("Getting flights with the price "+ price);
		
		return fService.findFlightsByPrice(price);
	}
	
	@PostMapping("/create")
	public String saveFlight(@RequestBody Flights flight) {
		log.info("Creating flight");
		
		return (fService.insertFlight(flight) == 1 ? "ok" : "failed");
	}

	@DeleteMapping("/delete/{id}")
	public String deleteFlight(@PathVariable int id) {
		log.info("Deleting Flight with id " + id);
		
		return (fService.deleteFlight(id) == 1 ? "ok" : "failed");
	}
	
	
	@GetMapping("validate/{id}/{name}")
	public String validateBooking(@PathVariable int id, @PathVariable String name) {
		
		return Validator.validateResponse(id, name) ? "Aceptado" : "Rechazado";
	}
	
}

package com.flights.FlightApp.Service;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;

import com.flights.FlightApp.Types.Flights;

@Component
public interface FlightService {
	
	List<Flights> findAllFlights();
	
	Flights findFlightByid(int id);
	
	List<Flights> findFlightsByDate(Date date);
	
	List<Flights> findFlightsByOrigin(String origin);
	
	List<Flights> findFlightsByDestination(String destination);
	
	List<Flights> findFlightsByAirline(String airline);
	
	List<Flights> findFlightsByPrice(int price);
	
	int insertFlight(Flights flight);
	
	int deleteFlight(int id);
	
	
}

package com.flights.FlightApp.Repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.flights.FlightApp.Types.Flights;

public interface FlightRepository extends JpaRepository<Flights, Integer>{

	List<Flights> findFlightsByDate(Date date);
	
	@Query("SELECT f FROM Flights f WHERE f.origin =?1")
	List<Flights> findFlightsByOrigin(String origin);
	
	@Query("SELECT f FROM Flights f WHERE f.destination =?1")
	List<Flights> findFlightsByDestination(String destination);
		
	@Query("SELECT f FROM Flights f WHERE f.airline =?1")
	List<Flights> findFlightsByAirline(String airline);
	
	@Query("SELECT f FROM Flights f WHERE f.price =?1")
	List<Flights> findFLightsByPrice(int price);
}

package com.flights.FlightApp.Service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flights.FlightApp.Repository.FlightRepository;
import com.flights.FlightApp.Types.Flights;

@Service
public class FlightServiceImplementation implements FlightService {
	
	@Autowired
	private FlightRepository fRepository;

	@Override
	public List<Flights> findAllFlights() {
		
		return fRepository.findAll();
	}

	@Override
	public Flights findFlightByid(int id) {

		return fRepository.getReferenceById(id);
	}

	@Override
	public List<Flights> findFlightsByDate(Date date) {
		
		return fRepository.findFlightsByDate(date);
	}

	@Override
	public List<Flights> findFlightsByOrigin(String origin) {
		
		return fRepository.findFlightsByOrigin(origin);
	}

	@Override
	public List<Flights> findFlightsByDestination(String destination) {
		
		return fRepository.findFlightsByDestination(destination);
	}

	@Override
	public List<Flights> findFlightsByAirline(String airline) {
		
		return fRepository.findFlightsByAirline(airline);
	}

	@Override
	public List<Flights> findFlightsByPrice(int price) {
		
		return fRepository.findFLightsByPrice(price);
	}

	@Override
	public int insertFlight(Flights flight) {
		int ok = 0;
		
		try {
			fRepository.save(flight);
			
			ok = 1;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return ok;
	}

	@Override
	public int deleteFlight(int flight) {
		int ok = 0;
		
		try {
			
			fRepository.deleteById(flight);
			
			ok = 1;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return ok;
	}

}

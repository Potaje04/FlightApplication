package com.flights.FlightApp.Types;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Flights")
public class Flights {
	
	public Flights() {
		
	}
	
	public Flights(String origin, String destination, int scales, boolean luggage, String airline, String date) {
		super();
		this.origin = origin;
		this.destination = destination;
		this.scales = scales;
		this.luggage = luggage;
		this.airline = airline;
		
		SimpleDateFormat datef = new SimpleDateFormat("yyyy-mm-dd");
		try {
			this.date = datef.parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		price = 30;
	}
	
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public int getScales() {
		return scales;
	}
	public void setScales(int scales) {
		this.scales = scales;
	}
	public boolean isLuggage() {
		return luggage;
	}
	public void setLuggage(boolean luggage) {
		this.luggage = luggage;
	}
	public String getAirline() {
		return airline;
	}
	public void setAirline(String airline) {
		this.airline = airline;
	}
	public int getLayoverInMinutes() {
		return layoverInMinutes;
	}
	public void setLayoverInMinutes(int layoverInMinutes) {
		this.layoverInMinutes = layoverInMinutes;
	}
	public int getId() {
		return id;
	}
	public int getPrice() {
		return price;
	}
	public Date getDate() {
		return date;
	}
	public long getFlightNumber() {
		return flightNumber;
	}
	public int getTransitTimeMinutes() {
		return transitTimeMinutes;
	}
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Nonnull
	private String origin;
	
	@Nonnull
	private String destination;
	
	@Nonnull
	private int price;
	
	@Nonnull
	private int scales;
	@Nonnull
	private boolean luggage;
	@Nonnull
	private String airline;
	
	private Date date;
	private long flightNumber;
	private int transitTimeMinutes;
	private int layoverInMinutes;
}

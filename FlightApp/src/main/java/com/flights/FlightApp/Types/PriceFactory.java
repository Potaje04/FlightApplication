package com.flights.FlightApp.Types;

public class PriceFactory implements Price{

	
	public int calculatedPrice() {
	
		return 0;
	}

	
	public static int defaultPrice() {
	
		return DEFAULT_PRICE;
	}
	
	
	private final int DEFAULT_PRICE = 100;
}

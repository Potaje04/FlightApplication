package com.flights.FlightApp.Calculators;

public class PriceCalculator {
	
	public static int calculatePrice(int age, int currentprice) {
		
		switch (age){
		
		case 0:
			
			return currentprice;
			
		case 1: 
			
			return currentprice += 30;
		
		case 2: 
			
			return currentprice += 100; 
		
		default:
			return currentprice;
		}
	}

}

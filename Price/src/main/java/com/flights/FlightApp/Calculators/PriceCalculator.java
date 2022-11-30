package com.flights.FlightApp.Calculators;

public class PriceCalculator {

	public static int calculateFlightPrice(String airline, int age) {

		int price = BASE_PRICE;

		price = calculatePriceAirline(airline, price);
		price = calculatePriceAge(age, price);

		return price;
	}
	
	public static int calculateFlightPrice(String airline, int age, boolean hasLuggage) {
		int price = calculateFlightPrice(airline, age);
		
		return calculatePriceWithLuggage(hasLuggage, price);
	}

	private static int calculatePriceAirline(String airline, int currentPrice) {

		switch (airline) {

		case "British Airlines":
			return currentPrice + 20;

		case "Iberia":
			return currentPrice + 30;

		case "Flight Emirates":
			return currentPrice + 10;

		case "Ryanair":
			return currentPrice + 40;

		default:
			return currentPrice;

		}

	}

	private static int calculatePriceAge(int age, int currentprice) {

		switch (age) {

		case 0:

			return currentprice;

		case 1:

			return currentprice + 30;

		case 2:

			return currentprice + 100;

		default:
			return currentprice;
		}
	}
	
	private static int calculatePriceWithLuggage(boolean hasLuggage, int currentPrice) {
		int price = currentPrice;
		
		if(hasLuggage) {
			return price + 30;
		}else {
			return price;
		}
		
	}
	
	private static final int BASE_PRICE = 100;

}

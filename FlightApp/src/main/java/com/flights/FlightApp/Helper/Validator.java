package com.flights.FlightApp.Helper;

public class Validator {

	
	public static boolean validateResponse(int id, String name) {
		int random = convertNameToRandomInt(name);
		
		if(id + random > name.length() - random) {
			return true;
		}else {
			return false;
		}
	}
	
	
	private static int convertNameToRandomInt(String name) {
		
		int random = (int) (Math.random() * name.length()) + 1;
		
		return random;
	}
}

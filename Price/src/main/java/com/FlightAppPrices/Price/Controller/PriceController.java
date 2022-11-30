package com.FlightAppPrices.Price.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.flights.FlightApp.Calculators.PriceCalculator;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("price")
public class PriceController {
	
	@GetMapping("/regular/")
	public int calculatePrice(@RequestParam String airline, @RequestParam int age) {
		
		return PriceCalculator.calculateFlightPrice(airline, age);
	}
	
	@GetMapping("/plus/")
	public int calculatePrice(@RequestParam String airline, @RequestParam int age, @RequestParam boolean hasLuggage) {
	
		return PriceCalculator.calculateFlightPrice(airline, age, hasLuggage);
	}

}

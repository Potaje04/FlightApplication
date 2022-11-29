package com.flights.FlightApp.Types;

import java.util.List;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class User {
	
	public User() {
		
	}
	
	
	public User(String name, String surname, String identification, int age, List<Flights> flights) {
		super();
		this.name = name;
		this.surname = surname;
		this.identification = identification;
		this.age = age;
		this.flights = flights;
	}



	public User(String name, String surname, String identification, int age) {
		super();
		this.name = name;
		this.surname = surname;
		this.identification = identification;
		this.age = age;
	}
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getIdentification() {
		return identification;
	}

	public void setIdentification(String identification) {
		this.identification = identification;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public List<Flights> getFlights() {
		return flights;
	}

	public void setFlights(List<Flights> flights) {
		this.flights = flights;
	}
	
	public void addFlight(Flights flight) {
		this.flights.add(flight);
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Nonnull
	private String name;
	
	@Nonnull
	private String surname;
	
	@Nonnull
	private String identification;
	
	@Nonnull
	private int age;
	
	@OneToMany
	private List<Flights> flights;

}

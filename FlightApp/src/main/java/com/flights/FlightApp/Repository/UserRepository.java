package com.flights.FlightApp.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.flights.FlightApp.Types.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	@Query("SELECT u FROM User u WHERE u.name =?1")
	List<User> findByName(String name);
	
}

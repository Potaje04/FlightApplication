package com.flights.FlightApp.Service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.flights.FlightApp.Types.User;

@Component
public interface UserService {
	
	List<User> findAllUsers();

	int inserteUser(User user);
	
	User findUserById(int id);
	
	int deleteUser(int id);
	
	List<User> findByName(String name);
	
	
}

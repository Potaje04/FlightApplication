package com.FlightApp.Userside.Users.Service;

import com.FlightApp.Userside.Users.Types.User;

import java.util.List;

import org.springframework.stereotype.Component;


@Component
public interface UserService {
	
	List<User> findAllUsers();

	int inserteUser(User user);
	
	User findUserById(int id);
	
	int deleteUser(int id);
	
	List<User> findByName(String name);
	
	
}

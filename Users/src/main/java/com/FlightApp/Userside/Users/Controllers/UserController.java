package com.FlightApp.Userside.Users.Controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.FlightApp.Userside.Users.Service.UserService;
import com.FlightApp.Userside.Users.Types.User;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("users")
public class UserController {

	@Autowired
	private UserService uService;

	private final Logger log = LoggerFactory.getLogger(getClass());

	@GetMapping("")
	public List<User> findAllUsers() {
		log.info("Getting all users");

		return uService.findAllUsers();
	}

	@PostMapping("/create")
	public String saveUser(@RequestBody User user) {
		log.info("Creating user");

		return (uService.inserteUser(user) == 1 ? "ok" : "failed");
	}

	@GetMapping("/{id}")
	public User findUserById(@PathVariable int id) {
		log.info("Finding user with the id " + id);

		return uService.findUserById(id);
	}

	@DeleteMapping("/delete/{id}")
	public String deleteUser(@PathVariable int id) {
		log.info("Deleting user with id " + id);

		return (uService.deleteUser(id) == 1 ? "ok" : "failed");
	}

	@GetMapping("/name/{name}")
	public List<User> getUserByName(@PathVariable String name) {
		log.info("Searching for users with the name " + name);

		return uService.findByName(name);
	}

}

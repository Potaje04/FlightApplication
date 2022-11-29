package com.FlightApp.Userside.Users.Service;
import com.FlightApp.Userside.Users.Types.User;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FlightApp.Userside.Users.Repository.UserRepository; 

@Service
public class UserServiceImplementation implements UserService{
	
	@Autowired
	private UserRepository uRepository;

	@Override
	public List<User> findAllUsers() {
		
		return uRepository.findAll();
	}

	@Override
	public int inserteUser(User user) {
		int ok = 0;
		try {
			
			uRepository.save(user);
			
			ok = 1;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return ok;
	}

	@Override
	public User findUserById(int id) {
		
		return uRepository.getReferenceById(id);
	}

	@Override
	public int deleteUser(int id) {
		int ok = 0;
		
		try {
			
			uRepository.deleteById(id);
			ok = 1;
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return ok;
	}

	@Override
	public List<User> findByName(String name) {

		return uRepository.findByName(name);
	}
	
	

}

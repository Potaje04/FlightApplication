package com.FlightApp.Userside.Users;

import io.restassured.RestAssured;

import static io.restassured.RestAssured.*;

public class UserApiTesting {
	
	public UserApiTesting() {
		 RestAssured.baseURI = "http://localhost:8081";
	}
	
	
	public static int getAllUsersTest() {
		
		return given().log().all().when().get("").getStatusCode();
	}
	
	public static int createUserTest() {
		
		return given().log().all().header("Content-Type", "application/json")
	}
}

package com.rena.rest.TodoApp.helloworld;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloWorldController {
	@GetMapping(path = "/helloworld")
	public String helloWorld() {
		return "Hello World!";
	}
	
	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("Hello World - changed");
	 }

}

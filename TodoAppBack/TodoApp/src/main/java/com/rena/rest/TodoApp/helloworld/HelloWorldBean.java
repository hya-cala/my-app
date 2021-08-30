package com.rena.rest.TodoApp.helloworld;

public class HelloWorldBean {
	private String message;
	public HelloWorldBean( String message) {
		this.message = message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	public String getMessage() {
		return message;
	}
}

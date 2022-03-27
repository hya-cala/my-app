package com.rena.rest.TodoApp;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BCryptPasswordEncoder encoder =  new BCryptPasswordEncoder();
		for (int i = 1; i<= 10; i++) {
		String encodedString = encoder.encode("19990309");
		System.out.println(encodedString);
		}
		
	}

}

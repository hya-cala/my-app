package com.rena.rest.TodoApp.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	static {
		todos.add(new Todo(++idCounter, "Rena", "Learn React", new Date(), false));
		todos.add(new Todo(++idCounter, "Rena", "Learn JavaScript", new Date(), false));
		todos.add(new Todo(++idCounter, "Rena", "Learn Java", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
}

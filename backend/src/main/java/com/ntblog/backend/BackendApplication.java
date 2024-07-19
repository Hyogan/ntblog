package com.ntblog.backend;

import javax.swing.text.html.FormSubmitEvent.MethodType;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication

public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	
	@GetMapping("/")
	public String printMessage() {
		return "Hello world";
	}

}

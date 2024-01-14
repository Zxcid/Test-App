package com.testapp.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HelloController {

    @GetMapping("/hello")
    public ResponseEntity<String> helloWorld() {
        return ResponseEntity.ok().body("Hello world!");
    }

    @GetMapping
    public ResponseEntity<String> gmv() { return ResponseEntity.ok().body("Good Morning Vietnam!"); }

}

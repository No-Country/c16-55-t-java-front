package com.backend.decompras.controller;

import com.backend.decompras.entities.User;
import com.backend.decompras.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController()
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
  private final UserService userService;
  @GetMapping
  public String helloworld (){
    return "hello word from user controller";
  }

  @GetMapping("/{id}")
  public Optional<User> getUserById(@PathVariable("id") Long id){
    return userService.findUserById(id);
  }
}


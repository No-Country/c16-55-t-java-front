package com.backend.decompras.controller;

import com.backend.decompras.dto.ResetPasswordDTO;
import com.backend.decompras.dto.UserLogueoDTO;
import com.backend.decompras.dto.response.ApiResponse;
import com.backend.decompras.entities.User;
import com.backend.decompras.security.service.UserDetailsServiceCustomer;
import com.backend.decompras.service.UserService;
import com.backend.decompras.util.Constants;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.security.Principal;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
  private final UserService userService;
  private final UserDetailsServiceCustomer userDetailsServiceCustomer;
  @GetMapping
  public String helloworld (){
    return "hello word from user controller";
  }
  @PostMapping("/update/info")
  public ApiResponse editUser(HttpServletRequest response, @Valid @RequestBody UserLogueoDTO userLogueoDTO){
    User user =  userDetailsServiceCustomer.getUserDetail();
    UserLogueoDTO userLogueoDTO1 = userService.updateUser(user, userLogueoDTO);
    ApiResponse apiResponse = new ApiResponse();
    apiResponse.setStatus(0);
    apiResponse.setPayload(userLogueoDTO1);
    apiResponse.setMessage(Constants.SUCESS);
    return apiResponse;
  }
  @PostMapping("/update/password")
  public ApiResponse editUser(HttpServletRequest response, @Valid @RequestBody ResetPasswordDTO resetPasswordDTO){
    User user =  userDetailsServiceCustomer.getUserDetail();
    Boolean verify = userService.updatePassword(user, resetPasswordDTO);
    ApiResponse apiResponse = new ApiResponse();
    apiResponse.setStatus(0);
    apiResponse.setPayload(verify);
    apiResponse.setMessage(Constants.SUCESS);
    return apiResponse;
  }

}


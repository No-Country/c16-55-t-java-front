package com.backend.decompras.controller;

import com.backend.decompras.dto.LoginDTO;
import com.backend.decompras.dto.SignUpDTO;
import com.backend.decompras.dto.UserLogueoDTO;
import com.backend.decompras.dto.response.ApiResponse;
import com.backend.decompras.dto.response.UserDTO;
import com.backend.decompras.security.jwt.JwtUtils;
import com.backend.decompras.service.AuthService;
import com.backend.decompras.util.Constants;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {
  private final AuthService authService;
  private final JwtUtils jwtUtils;
  @PostMapping("/login")
  public ApiResponse login (HttpServletResponse response, @RequestBody LoginDTO credentials)
  {
    System.out.println(" ENTRA AL LOGIN");
    UserLogueoDTO userLogueoDTO = authService.login(credentials);
    System.out.println("userLogueoDTO = " + userLogueoDTO.getEmail());
    String token = userLogueoDTO.getToken();
    response.setHeader("Authorization", "Bearer " + token);
    UserDTO userDTO = new UserDTO();
    userDTO.setEmail(userLogueoDTO.getEmail());
    userDTO.setToken(userLogueoDTO.getToken());
    userDTO.setUserInfo(userLogueoDTO);
    ApiResponse apiResponse = new ApiResponse();
    apiResponse.setStatus(0);
    apiResponse.setPayload(userDTO);
    apiResponse.setMessage(Constants.SUCESS);

    response.setStatus(HttpServletResponse.SC_OK);
    response.setContentType(MediaType.APPLICATION_JSON_VALUE);
    return apiResponse;
  }

  @PostMapping("/signup")
  public ApiResponse signup(HttpServletResponse response,@Valid @RequestBody SignUpDTO signUpDTO)
  {
    response.setStatus(HttpServletResponse.SC_OK);
    response.setContentType(MediaType.APPLICATION_JSON_VALUE);
    ApiResponse apiResponse = new ApiResponse();
    signUpDTO = authService.signup(signUpDTO);
    String token = jwtUtils.generateToken(signUpDTO.getEmail(), Constants.ROL_DEFAULT);
    UserDTO userDTO = new UserDTO();
    userDTO.setEmail(signUpDTO.getEmail());
    userDTO.setToken(token);
    response.setHeader("Authorization", "Bearer " + token);
    apiResponse.setStatus(0);
    apiResponse.setPayload(userDTO);
    apiResponse.setMessage(Constants.SUCESS);
    return apiResponse;
  }
}

package com.backend.decompras.service.imp;

import com.backend.decompras.dto.LoginDTO;
import com.backend.decompras.dto.SignUpDTO;
import com.backend.decompras.dto.UserLogueoDTO;
import com.backend.decompras.entities.User;
import com.backend.decompras.exception.RegisterDuplicated;
import com.backend.decompras.repository.UserRepository;
import com.backend.decompras.security.jwt.JwtUtils;
import com.backend.decompras.security.service.UserDetailsServiceCustomer;
import com.backend.decompras.service.AuthService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Slf4j
@Service
public class AuthServiceImpl implements AuthService {
  private final AuthenticationManager authenticationManager;
  private final JwtUtils jwtUtils;
  private final UserDetailsServiceCustomer userDetailsServiceCustomer;
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  @Override
  public UserLogueoDTO login(LoginDTO credentials) {
    UserLogueoDTO userLogueoDTO  = new UserLogueoDTO();
    String tokenn = "";
    Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(credentials.getEmail(),credentials.getPassword()));
    if (auth.isAuthenticated())
      tokenn = jwtUtils.generateToken(userDetailsServiceCustomer.getUserDetail().getEmail(), userDetailsServiceCustomer.getUserDetail().getRole());
    log.info("Se logueo el usuario "+ credentials.getEmail());
    User userFound = userDetailsServiceCustomer.getUserDetail();
    userLogueoDTO.setToken(tokenn);
    userLogueoDTO.setEmail(userFound.getEmail());
    userLogueoDTO.setCity(userFound.getCity());
    userLogueoDTO.setCountry(userFound.getCountry());
    userLogueoDTO.setProvince(userFound.getProvince());
    userLogueoDTO.setAddress(userFound.getAddress());
    return userLogueoDTO;
  }

  @Override
  public SignUpDTO signup(SignUpDTO body) {
    List<User> userByEmail = userRepository.existUserRegistered(body.getEmail());
    if (!userByEmail.isEmpty())
      throw new RegisterDuplicated("email ya esta ocupado");
    User userToSave = new User();
    userToSave.setCity(body.getCity());
    userToSave.setCountry(body.getCountry());
    userToSave.setName(body.getName());
    userToSave.setLastname(body.getLastname());
    userToSave.setProvince(body.getProvince());
    userToSave.setCity(body.getCity());
    userToSave.setEmail(body.getEmail());
    userToSave.setAddress(body.getAddress());
    userToSave.setPassword( passwordEncoder.encode(body.getPassword()));
    userToSave.setRole("USER");
    userRepository.save(userToSave);
    return body;
  }
}

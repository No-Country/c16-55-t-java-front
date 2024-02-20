package com.backend.decompras.security.service;

import com.backend.decompras.entities.User;
import com.backend.decompras.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDetailsServiceCustomer implements UserDetailsService {
  private User userFound;
  private UserRepository userRepository;
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

    userFound = userRepository.findByEmail(username).orElseThrow(()-> new UsernameNotFoundException("EMAIL NO ENCONTRADO"));
    System.out.println("username en loadby username = " + username);
    System.out.println("userFound en ladbyusername= " + userFound);
    List<GrantedAuthority> roles = new ArrayList<>();
    GrantedAuthority grantedAuthority =  new SimpleGrantedAuthority(userFound.getRole());
    roles.add(grantedAuthority);
    return (UserDetails) new org.springframework.security.core.userdetails.User(username,userFound.getPassword(),roles);
  }
  public User getUserDetail(){return userFound;}
}

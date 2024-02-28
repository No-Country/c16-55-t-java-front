package com.backend.decompras.service.imp;


import com.backend.decompras.dto.ResetPasswordDTO;
import com.backend.decompras.dto.UserLogueoDTO;
import com.backend.decompras.entities.User;
import com.backend.decompras.repository.UserRepository;
import com.backend.decompras.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  @Override
  public Optional<User> findUserByEmail(String email) {
    return userRepository.findByEmail(email);
  }

  @Override
  public UserLogueoDTO updateUser(User user, UserLogueoDTO userLogueoDTO) {
    user.setName(userLogueoDTO.getName());
    user.setLastname(userLogueoDTO.getLastname());
    user.setEmail(userLogueoDTO.getEmail());
    user.setCountry(userLogueoDTO.getCountry());
    user.setCity(userLogueoDTO.getCity());
    user.setProvince(userLogueoDTO.getProvince());
    user.setAddress(userLogueoDTO.getAddress());
    userRepository.save(user);

    UserLogueoDTO updatedUserLogueoDTO = new UserLogueoDTO();
    //token updated?
    updatedUserLogueoDTO.setLastname(userLogueoDTO.getLastname());
    updatedUserLogueoDTO.setName(userLogueoDTO.getName());
    updatedUserLogueoDTO.setToken(userLogueoDTO.getToken());
    updatedUserLogueoDTO.setEmail(user.getEmail());
    updatedUserLogueoDTO.setCountry(user.getCountry());
    updatedUserLogueoDTO.setCity(user.getCity());
    updatedUserLogueoDTO.setProvince(user.getProvince());
    updatedUserLogueoDTO.setAddress(user.getAddress());

    return updatedUserLogueoDTO;
  }

  @Override
  public Boolean updatePassword(User user, ResetPasswordDTO resetPasswordDTO) {
    if (user.getEmail().equalsIgnoreCase(resetPasswordDTO.getEmail())){
      if (passwordEncoder.matches( resetPasswordDTO.getPassword(), user.getPassword())){
        System.out.println("SON IGUALES LAS PASSWORD");
        user.setPassword( passwordEncoder.encode(resetPasswordDTO.getNewPassword()));
        userRepository.save(user);
        return true;
      }else{
        return false;
      }
    }else {
      return false;
    }
  }
}

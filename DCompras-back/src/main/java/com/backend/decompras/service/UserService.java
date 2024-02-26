package com.backend.decompras.service;

import com.backend.decompras.dto.ResetPasswordDTO;
import com.backend.decompras.dto.UserLogueoDTO;
import com.backend.decompras.entities.User;

import java.util.Optional;

public interface UserService {
  Optional<User> findUserByEmail(String email);


  UserLogueoDTO updateUser(User user, UserLogueoDTO userLogueoDTO);

  Boolean updatePassword(User user, ResetPasswordDTO resetPasswordDTO);
}

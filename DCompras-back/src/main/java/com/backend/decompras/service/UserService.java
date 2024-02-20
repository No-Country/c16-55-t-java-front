package com.backend.decompras.service;

import com.backend.decompras.entities.User;

import java.util.Optional;

public interface UserService {
  User registerUser(User user);
  Optional<User> findUserById(Long id);
}

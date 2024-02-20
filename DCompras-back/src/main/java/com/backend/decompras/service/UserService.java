package com.backend.decompras.service;

import com.backend.decompras.entities.User;

import java.util.Optional;

public interface UserService {
  Optional<User> findUserByEmail(String email);
}

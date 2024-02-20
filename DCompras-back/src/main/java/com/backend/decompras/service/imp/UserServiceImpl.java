package com.backend.decompras.service.imp;


import com.backend.decompras.entities.User;
import com.backend.decompras.repository.UserRepository;
import com.backend.decompras.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
  private final UserRepository userRepository;

  @Override
  public Optional<User> findUserByEmail(String email) {
    return userRepository.findByEmail(email);
  }
}

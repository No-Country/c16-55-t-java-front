package com.backend.decompras.service;

import com.backend.decompras.dto.LoginDTO;
import com.backend.decompras.dto.SignUpDTO;
import com.backend.decompras.dto.UserLogueoDTO;

public interface AuthService {
  public UserLogueoDTO login(LoginDTO credentials);
  public SignUpDTO signup(SignUpDTO body);
}

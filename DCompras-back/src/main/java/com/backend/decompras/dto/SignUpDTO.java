package com.backend.decompras.dto;

import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class SignUpDTO {
  public String email;
  public String password;
  public String username;
}

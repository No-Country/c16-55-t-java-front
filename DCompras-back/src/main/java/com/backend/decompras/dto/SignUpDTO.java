package com.backend.decompras.dto;

import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class SignUpDTO implements Serializable {
  @NotBlank
  public String email;
  @NotBlank
  public String password;
  @NotBlank
  public String username;
}

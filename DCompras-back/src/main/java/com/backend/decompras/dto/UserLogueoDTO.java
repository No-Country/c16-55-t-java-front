package com.backend.decompras.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserLogueoDTO {
  private String token;
  private String username;
  private boolean voto;
  private String candidato;
  private String email;
  private String rol;
}

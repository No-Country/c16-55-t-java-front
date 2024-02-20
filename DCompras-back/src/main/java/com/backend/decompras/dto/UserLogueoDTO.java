package com.backend.decompras.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class UserLogueoDTO implements Serializable {
  private String token;
  private String username;
  private boolean voto;
  private String candidato;
  private String email;
  private String rol;
}

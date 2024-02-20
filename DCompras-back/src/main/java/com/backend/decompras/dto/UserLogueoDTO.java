package com.backend.decompras.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class UserLogueoDTO implements Serializable {
  private String token;
  private String email;
  private String country;
  private String city;
  private String province;
  private String address;
}

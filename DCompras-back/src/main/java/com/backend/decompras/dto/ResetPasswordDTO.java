package com.backend.decompras.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResetPasswordDTO {
  @NotBlank
  public String email;

  @NotBlank
  public String password;

  @NotBlank
  public String newPassword;
}

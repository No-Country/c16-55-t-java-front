package com.backend.decompras.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApiResponse {
  public Integer status;
  public String message;
  public Object payload;
  public String  error;
}

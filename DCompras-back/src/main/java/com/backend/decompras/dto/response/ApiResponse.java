package com.backend.decompras.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class ApiResponse implements Serializable {
  public Integer status;
  public String message;
  public Object payload;
  public String  error;
}

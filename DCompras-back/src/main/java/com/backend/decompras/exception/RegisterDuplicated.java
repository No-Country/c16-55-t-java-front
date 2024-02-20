package com.backend.decompras.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class RegisterDuplicated extends RuntimeException{
  public String message;

}

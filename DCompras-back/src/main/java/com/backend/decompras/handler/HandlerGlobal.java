package com.backend.decompras.handler;

import com.backend.decompras.dto.response.ApiResponse;
import com.backend.decompras.exception.RegisterDuplicated;
import com.backend.decompras.exception.RegisterNotFound;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class HandlerGlobal extends ResponseEntityExceptionHandler {
  @ExceptionHandler(value = BadCredentialsException.class)
  public ResponseEntity<ApiResponse> handleLoginException(BadCredentialsException e)
  {
    return generateApiResponseError("No se encontro una cuenta asociada", e);

  }
  @ExceptionHandler(value = RegisterDuplicated.class)
  public ResponseEntity<ApiResponse> handleRegistredDuplicated( RegisterDuplicated e)
  {
    return generateApiResponseError(e.getMessage(), e);

  }
  @ExceptionHandler(value = RegisterNotFound.class)
  public ResponseEntity<ApiResponse> handleRegistredNotFound( RegisterNotFound e)
  {
    return generateApiResponseError(e.getMessage(), e);

  }

  private ResponseEntity<ApiResponse> generateApiResponseError(String error, Exception e)
  {
    ApiResponse apiResponse = new ApiResponse();
    apiResponse.setError(error + " " + e);
    apiResponse.setStatus(400);
    return  new ResponseEntity<>(apiResponse, HttpStatus.BAD_REQUEST);
  }
  @Override
  protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                HttpHeaders headers, HttpStatusCode status, WebRequest request) {
    Map<String,Object> response = new HashMap<String,Object>();

    ex.getBindingResult().getFieldErrors().forEach(error -> response.put(error.getField(), error.getDefaultMessage()));

    return new ResponseEntity<Object>(response,HttpStatus.BAD_REQUEST);
  }
}

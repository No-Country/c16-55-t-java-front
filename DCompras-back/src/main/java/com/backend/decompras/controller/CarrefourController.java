package com.backend.decompras.controller;

import com.backend.decompras.dto.UserLogueoDTO;
import com.backend.decompras.dto.response.ApiResponse;
import com.backend.decompras.dto.response.CarrefourProductDTO;
import com.backend.decompras.dto.response.UserDTO;
import com.backend.decompras.service.CarrefourService;
import com.backend.decompras.util.Constants;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products/carrefour")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CarrefourController {
  private final CarrefourService carrefourService;
  @GetMapping("/vinos")
  public ApiResponse getWinesFromCarrefour(HttpServletResponse responsee){
    CarrefourProductDTO response = carrefourService.getWinesCategory();
    ApiResponse apiResponse = new ApiResponse();
    apiResponse.setStatus(0);
    apiResponse.setPayload(response);
    apiResponse.setMessage(Constants.SUCESS);
    responsee.setStatus(HttpServletResponse.SC_OK);
    responsee.setContentType(MediaType.APPLICATION_JSON_VALUE);
    return apiResponse;
  }

  @GetMapping("/arroz")
  public ApiResponse getArrozFromCarrefour(HttpServletResponse responsee){
    CarrefourProductDTO response = carrefourService.getArrozCategory();
    ApiResponse apiResponse = new ApiResponse();
    apiResponse.setStatus(0);
    apiResponse.setPayload(response);
    apiResponse.setMessage(Constants.SUCESS);
    responsee.setStatus(HttpServletResponse.SC_OK);
    responsee.setContentType(MediaType.APPLICATION_JSON_VALUE);
    return apiResponse;
  }
  @GetMapping("/fideos")
  public ApiResponse getFideosFromCarrefour(HttpServletResponse responsee){
    CarrefourProductDTO response = carrefourService.getFideosCategory();
    ApiResponse apiResponse = new ApiResponse();
    apiResponse.setStatus(0);
    apiResponse.setPayload(response);
    apiResponse.setMessage(Constants.SUCESS);
    responsee.setStatus(HttpServletResponse.SC_OK);
    responsee.setContentType(MediaType.APPLICATION_JSON_VALUE);
    return apiResponse;
  }
  @GetMapping("/aguas")
  public ApiResponse getAguasFromCarrefour(HttpServletResponse responsee){
    CarrefourProductDTO response = carrefourService.getAguaCategory();
    ApiResponse apiResponse = new ApiResponse();
    apiResponse.setStatus(0);
    apiResponse.setPayload(response);
    apiResponse.setMessage(Constants.SUCESS);
    responsee.setStatus(HttpServletResponse.SC_OK);
    responsee.setContentType(MediaType.APPLICATION_JSON_VALUE);
    return apiResponse;
  }
  @GetMapping("/aceites")
  public ApiResponse getAceitesFromCarrefour(HttpServletResponse responsee){
    CarrefourProductDTO response = carrefourService.getAceiteCategory();
    ApiResponse apiResponse = new ApiResponse();
    apiResponse.setStatus(0);
    apiResponse.setPayload(response);
    apiResponse.setMessage(Constants.SUCESS);
    responsee.setStatus(HttpServletResponse.SC_OK);
    responsee.setContentType(MediaType.APPLICATION_JSON_VALUE);
    return apiResponse;
  }
}

package com.backend.decompras.service;


import com.backend.decompras.dto.response.CarrefourProductDTO;

public interface CarrefourService {
  public CarrefourProductDTO getWinesCategory();
  public CarrefourProductDTO getArrozCategory();
  public CarrefourProductDTO getAceiteCategory();
  public CarrefourProductDTO getFideosCategory();
  public CarrefourProductDTO getAguaCategory();
}

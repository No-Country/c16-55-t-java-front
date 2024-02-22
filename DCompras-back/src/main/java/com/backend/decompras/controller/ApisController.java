package com.backend.decompras.controller;

import com.backend.decompras.service.ApisService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class ApisController {
  private final ApisService apisService;
  @RequestMapping(value = "/comodin", method = RequestMethod.GET, produces = "application/json")
  public Object comodin(){
    return apisService.getWinesFromCarrefour();
  }
}

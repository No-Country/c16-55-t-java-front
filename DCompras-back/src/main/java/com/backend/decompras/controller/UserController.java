package com.backend.decompras.controller;

import com.backend.decompras.entities.User;
import com.backend.decompras.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
  private final UserService userService;
  @GetMapping
  public String helloworld (){
    return "hello word from user controller";
  }
  @GetMapping("/comodin")
  public List<Object> comodin(){
    String url = "https://alberdisa.myvtex.com/api/catalog_system/pub/products/search/?_from=0&_to=49&fq=skuId:3322&fq=skuId:3323&fq=skuId:3324&fq=skuId:3325&fq=skuId:3326&fq=skuId:3327&fq=skuId:3328&fq=skuId:3329&fq=skuId:3330&fq=skuId:4288&fq=skuId:16351&fq=skuId:16352";
    RestTemplate restTemplate = new RestTemplate();
    Object[] products = restTemplate.getForObject(url, Object[].class);
    return Arrays.asList(products);
  }

}


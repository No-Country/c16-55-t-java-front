package com.backend.decompras.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

@Getter
@Setter
public class CarrefourProductDTO implements Serializable {
  private List<Map<String, Object>> products;
}

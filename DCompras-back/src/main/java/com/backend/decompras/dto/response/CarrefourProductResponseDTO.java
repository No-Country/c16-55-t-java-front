package com.backend.decompras.dto.response;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CarrefourProductResponseDTO {
  private JsonNode data;
}

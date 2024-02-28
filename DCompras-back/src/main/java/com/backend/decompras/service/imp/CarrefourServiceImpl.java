package com.backend.decompras.service.imp;

import com.backend.decompras.dto.response.CarrefourProductDTO;
import com.backend.decompras.dto.response.CarrefourProductResponseDTO;
import com.backend.decompras.service.CarrefourService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CarrefourServiceImpl implements CarrefourService {
  @Override
  public CarrefourProductDTO getWinesCategory() {
    try {
      HttpResponse<String> response = Unirest.get("https://www.catalogosofertas.com.ar/offers-dynamic/spotlight/6")
              .asString();
      ObjectMapper objectMapper = new ObjectMapper();
      CarrefourProductResponseDTO carrefourProductDTO = objectMapper
              .readValue(response.getBody(), CarrefourProductResponseDTO.class);
      JsonNode productsNode = carrefourProductDTO
              .getData()
              .get("productSearch")
              .get("products");

      List<Map<String, Object>> products = objectMapper
              .convertValue(productsNode, new TypeReference<List<Map<String, Object>>>() {});

      CarrefourProductDTO carrefourProductDTO1 = new CarrefourProductDTO();
      carrefourProductDTO1.setProducts(products);
      return carrefourProductDTO1;
    }catch (Exception e){
      return new CarrefourProductDTO();
    }

  }

  @Override
  public CarrefourProductDTO getArrozCategory() {
    try {
      HttpResponse<String> httpResponse = Unirest.get("https://www.carrefour.com.ar/_v/segment/graphql/v1?workspace=master&maxAge=short&appsEtag=remove&domain=store&locale=es-AR&__bindingId=ecd0c46c-3b2a-4fe1-aae0-6080b7240f9b&operationName=productSearchV3&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2240b843ca1f7934d20d05d334916220a0c2cae3833d9f17bcb79cdd2185adceac%22%2C%22sender%22%3A%22vtex.store-resources%400.x%22%2C%22provider%22%3A%22vtex.search-graphql%400.x%22%7D%2C%22variables%22%3A%22eyJoaWRlVW5hdmFpbGFibGVJdGVtcyI6dHJ1ZSwic2t1c0ZpbHRlciI6IkFMTF9BVkFJTEFCTEUiLCJzaW11bGF0aW9uQmVoYXZpb3IiOiJkZWZhdWx0IiwiaW5zdGFsbG1lbnRDcml0ZXJpYSI6Ik1BWF9XSVRIT1VUX0lOVEVSRVNUIiwicHJvZHVjdE9yaWdpblZ0ZXgiOmZhbHNlLCJtYXAiOiJjLGMsYyIsInF1ZXJ5IjoiYWxtYWNlbi9hcnJvei15LWxlZ3VtYnJlcy9hcnJveiIsIm9yZGVyQnkiOiJPcmRlckJ5UHJpY2VBU0MiLCJmcm9tIjowLCJ0byI6MTUsInNlbGVjdGVkRmFjZXRzIjpbeyJrZXkiOiJjIiwidmFsdWUiOiJhbG1hY2VuIn0seyJrZXkiOiJjIiwidmFsdWUiOiJhcnJvei15LWxlZ3VtYnJlcyJ9LHsia2V5IjoiYyIsInZhbHVlIjoiYXJyb3oifV0sImZhY2V0c0JlaGF2aW9yIjoiU3RhdGljIiwiY2F0ZWdvcnlUcmVlQmVoYXZpb3IiOiJkZWZhdWx0Iiwid2l0aEZhY2V0cyI6ZmFsc2UsInZhcmlhbnQiOiI2NWE2OTc1MmRlODIzYzRlMzE5MTM4Y2ItdmFyaWFudFRyZWFtZW50In0%3D%22%7D")
              .asString();
      ObjectMapper objectMapper =  new ObjectMapper();
      CarrefourProductResponseDTO carrefourProductResponseDTO = objectMapper.readValue(httpResponse.getBody(), CarrefourProductResponseDTO.class);
      JsonNode productJsonNode = carrefourProductResponseDTO.getData().get("productSearch")
              .get("products");
      List<Map<String, Object>> products = objectMapper.convertValue(productJsonNode, new TypeReference<List<Map<String, Object>>>() {
      });
      CarrefourProductDTO carrefourProductDTO = new CarrefourProductDTO();
      carrefourProductDTO.setProducts(products);
      return carrefourProductDTO;
    }catch (Exception e){
      return new CarrefourProductDTO();
    }
  }

  @Override
  public CarrefourProductDTO getAceiteCategory() {
    try {
      HttpResponse<String> httpResponse = Unirest.get("https://www.carrefour.com.ar/_v/segment/graphql/v1?workspace=master&maxAge=short&appsEtag=remove&domain=store&locale=es-AR&__bindingId=ecd0c46c-3b2a-4fe1-aae0-6080b7240f9b&operationName=productSearchV3&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2240b843ca1f7934d20d05d334916220a0c2cae3833d9f17bcb79cdd2185adceac%22%2C%22sender%22%3A%22vtex.store-resources%400.x%22%2C%22provider%22%3A%22vtex.search-graphql%400.x%22%7D%2C%22variables%22%3A%22eyJoaWRlVW5hdmFpbGFibGVJdGVtcyI6dHJ1ZSwic2t1c0ZpbHRlciI6IkFMTF9BVkFJTEFCTEUiLCJzaW11bGF0aW9uQmVoYXZpb3IiOiJkZWZhdWx0IiwiaW5zdGFsbG1lbnRDcml0ZXJpYSI6Ik1BWF9XSVRIT1VUX0lOVEVSRVNUIiwicHJvZHVjdE9yaWdpblZ0ZXgiOmZhbHNlLCJtYXAiOiJjLGMsYyIsInF1ZXJ5IjoiYWxtYWNlbi9hY2VpdGVzLXktdmluYWdyZXMvYWNlaXRlcy1jb211bmVzIiwib3JkZXJCeSI6Ik9yZGVyQnlQcmljZUFTQyIsImZyb20iOjAsInRvIjoxNSwic2VsZWN0ZWRGYWNldHMiOlt7ImtleSI6ImMiLCJ2YWx1ZSI6ImFsbWFjZW4ifSx7ImtleSI6ImMiLCJ2YWx1ZSI6ImFjZWl0ZXMteS12aW5hZ3JlcyJ9LHsia2V5IjoiYyIsInZhbHVlIjoiYWNlaXRlcy1jb211bmVzIn1dLCJmYWNldHNCZWhhdmlvciI6IlN0YXRpYyIsImNhdGVnb3J5VHJlZUJlaGF2aW9yIjoiZGVmYXVsdCIsIndpdGhGYWNldHMiOmZhbHNlLCJ2YXJpYW50IjoiNjVhNjk3NTJkZTgyM2M0ZTMxOTEzOGNiLXZhcmlhbnRUcmVhbWVudCJ9%22%7D").asString();
      ObjectMapper objectMapper = new ObjectMapper();
      CarrefourProductResponseDTO carrefourProductResponseDTO = objectMapper.readValue(httpResponse.getBody(), CarrefourProductResponseDTO.class);
      JsonNode jsonNode = carrefourProductResponseDTO
              .getData()
              .get("productSearch")
              .get("products");
      List<Map<String, Object>> products = objectMapper.convertValue(jsonNode, new TypeReference<List<Map<String, Object>>>() {
      });
      CarrefourProductDTO carrefourProductDTO = new CarrefourProductDTO();
      carrefourProductDTO.setProducts(products);
      return carrefourProductDTO;
    }catch (Exception e){
      return new CarrefourProductDTO();
    }
  }

  @Override
  public CarrefourProductDTO getFideosCategory() {
    try {
      HttpResponse<String> httpResponse = Unirest.get("https://www.carrefour.com.ar/_v/segment/graphql/v1?workspace=master&maxAge=short&appsEtag=remove&domain=store&locale=es-AR&__bindingId=ecd0c46c-3b2a-4fe1-aae0-6080b7240f9b&operationName=productSearchV3&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2240b843ca1f7934d20d05d334916220a0c2cae3833d9f17bcb79cdd2185adceac%22%2C%22sender%22%3A%22vtex.store-resources%400.x%22%2C%22provider%22%3A%22vtex.search-graphql%400.x%22%7D%2C%22variables%22%3A%22eyJoaWRlVW5hdmFpbGFibGVJdGVtcyI6dHJ1ZSwic2t1c0ZpbHRlciI6IkFMTF9BVkFJTEFCTEUiLCJzaW11bGF0aW9uQmVoYXZpb3IiOiJkZWZhdWx0IiwiaW5zdGFsbG1lbnRDcml0ZXJpYSI6Ik1BWF9XSVRIT1VUX0lOVEVSRVNUIiwicHJvZHVjdE9yaWdpblZ0ZXgiOmZhbHNlLCJtYXAiOiJjLGMiLCJxdWVyeSI6ImFsbWFjZW4vcGFzdGFzLXNlY2FzIiwib3JkZXJCeSI6Ik9yZGVyQnlQcmljZUFTQyIsImZyb20iOjAsInRvIjoxNSwic2VsZWN0ZWRGYWNldHMiOlt7ImtleSI6ImMiLCJ2YWx1ZSI6ImFsbWFjZW4ifSx7ImtleSI6ImMiLCJ2YWx1ZSI6InBhc3Rhcy1zZWNhcyJ9XSwiZmFjZXRzQmVoYXZpb3IiOiJTdGF0aWMiLCJjYXRlZ29yeVRyZWVCZWhhdmlvciI6ImRlZmF1bHQiLCJ3aXRoRmFjZXRzIjpmYWxzZSwidmFyaWFudCI6IjY1YTY5NzUyZGU4MjNjNGUzMTkxMzhjYi12YXJpYW50VHJlYW1lbnQifQ%3D%3D%22%7D").asString();
      ObjectMapper objectMapper = new ObjectMapper();
      CarrefourProductResponseDTO carrefourProductResponseDTO = objectMapper.readValue(httpResponse.getBody(), CarrefourProductResponseDTO.class);
      JsonNode jsonNode = carrefourProductResponseDTO
              .getData()
              .get("productSearch")
              .get("products");
      List<Map<String, Object>> products = objectMapper.convertValue(jsonNode, new TypeReference<List<Map<String, Object>>>() {
      });
      CarrefourProductDTO carrefourProductDTO = new CarrefourProductDTO();
      carrefourProductDTO.setProducts(products);
      return carrefourProductDTO;
    }catch (Exception e){
      return new CarrefourProductDTO();
    }

  }

  @Override
  public CarrefourProductDTO getAguaCategory() {
    try {
      HttpResponse<String> httpResponse = Unirest.get("https://www.carrefour.com.ar/_v/segment/graphql/v1?workspace=master&maxAge=short&appsEtag=remove&domain=store&locale=es-AR&__bindingId=ecd0c46c-3b2a-4fe1-aae0-6080b7240f9b&operationName=productSearchV3&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2240b843ca1f7934d20d05d334916220a0c2cae3833d9f17bcb79cdd2185adceac%22%2C%22sender%22%3A%22vtex.store-resources%400.x%22%2C%22provider%22%3A%22vtex.search-graphql%400.x%22%7D%2C%22variables%22%3A%22eyJoaWRlVW5hdmFpbGFibGVJdGVtcyI6dHJ1ZSwic2t1c0ZpbHRlciI6IkFMTF9BVkFJTEFCTEUiLCJzaW11bGF0aW9uQmVoYXZpb3IiOiJkZWZhdWx0IiwiaW5zdGFsbG1lbnRDcml0ZXJpYSI6Ik1BWF9XSVRIT1VUX0lOVEVSRVNUIiwicHJvZHVjdE9yaWdpblZ0ZXgiOmZhbHNlLCJtYXAiOiJjLGMsYyIsInF1ZXJ5IjoiYmViaWRhcy9hZ3Vhcy9hZ3Vhcy1taW5lcmFsZXMteS1kZS1tZXNhIiwib3JkZXJCeSI6Ik9yZGVyQnlQcmljZUFTQyIsImZyb20iOjAsInRvIjoxNSwic2VsZWN0ZWRGYWNldHMiOlt7ImtleSI6ImMiLCJ2YWx1ZSI6ImJlYmlkYXMifSx7ImtleSI6ImMiLCJ2YWx1ZSI6ImFndWFzIn0seyJrZXkiOiJjIiwidmFsdWUiOiJhZ3Vhcy1taW5lcmFsZXMteS1kZS1tZXNhIn1dLCJmYWNldHNCZWhhdmlvciI6IlN0YXRpYyIsImNhdGVnb3J5VHJlZUJlaGF2aW9yIjoiZGVmYXVsdCIsIndpdGhGYWNldHMiOmZhbHNlLCJ2YXJpYW50IjoiNjVhNjk3NTJkZTgyM2M0ZTMxOTEzOGNiLXZhcmlhbnRUcmVhbWVudCJ9%22%7D").asString();
      ObjectMapper objectMapper = new ObjectMapper();
      CarrefourProductResponseDTO carrefourProductResponseDTO = objectMapper.readValue(httpResponse.getBody(), CarrefourProductResponseDTO.class);
      JsonNode jsonNode = carrefourProductResponseDTO
              .getData()
              .get("productSearch")
              .get("products");
      List<Map<String, Object>> products = objectMapper.convertValue(jsonNode, new TypeReference<List<Map<String, Object>>>() {
      });
      CarrefourProductDTO carrefourProductDTO = new CarrefourProductDTO();
      carrefourProductDTO.setProducts(products);
      return carrefourProductDTO;
    }catch (Exception e){
      return new CarrefourProductDTO();
    }
  }
}

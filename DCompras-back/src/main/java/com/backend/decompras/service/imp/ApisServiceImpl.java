package com.backend.decompras.service.imp;

import com.backend.decompras.service.ApisService;
import com.mashape.unirest.http.Unirest;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import com.mashape.unirest.http.HttpResponse;

@Service
@RequiredArgsConstructor
public class ApisServiceImpl implements ApisService {

  @Override
  public String getWinesFromCarrefour() {
    try {
      HttpResponse<String> response = Unirest.get("https://www.carrefour.com.ar/_v/segment/graphql/v1?extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2228bd611a51a5b8725a53b31dc003d3f7b3e4ff094d8bd6df4061456a5734deab%22%2C%22sender%22%3A%22valtech.carrefourar-ga%400.x%22%2C%22provider%22%3A%22vtex.search-graphql%400.x%22%7D%2C%22variables%22%3A%22eyJpZCI6IjI1MTc3MCJ9%22%7D")
              .asString();
      return response.getBody();
    } catch (Exception e) {
      System.out.println("e = " + e);
      return "error en la respuesta: " + e;
    }
  }
}

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
      HttpResponse<String> response = Unirest.get("https://www.carrefour.com.ar/_v/segment/graphql/v1?workspace=master&maxAge=short&appsEtag=remove&domain=store&locale=es-AR&__bindingId=ecd0c46c-3b2a-4fe1-aae0-6080b7240f9b&operationName=productSearchV3&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2240b843ca1f7934d20d05d334916220a0c2cae3833d9f17bcb79cdd2185adceac%22%2C%22sender%22%3A%22vtex.store-resources%400.x%22%2C%22provider%22%3A%22vtex.search-graphql%400.x%22%7D%2C%22variables%22%3A%22eyJoaWRlVW5hdmFpbGFibGVJdGVtcyI6dHJ1ZSwic2t1c0ZpbHRlciI6IkFMTF9BVkFJTEFCTEUiLCJzaW11bGF0aW9uQmVoYXZpb3IiOiJkZWZhdWx0IiwiaW5zdGFsbG1lbnRDcml0ZXJpYSI6Ik1BWF9XSVRIT1VUX0lOVEVSRVNUIiwicHJvZHVjdE9yaWdpblZ0ZXgiOmZhbHNlLCJtYXAiOiJjLGMsYyIsInF1ZXJ5IjoiYWxtYWNlbi9hY2VpdGVzLXktdmluYWdyZXMvYWNlaXRlcy1kZS1vbGl2YSIsIm9yZGVyQnkiOiJPcmRlckJ5UHJpY2VBU0MiLCJmcm9tIjowLCJ0byI6MTUsInNlbGVjdGVkRmFjZXRzIjpbeyJrZXkiOiJjIiwidmFsdWUiOiJhbG1hY2VuIn0seyJrZXkiOiJjIiwidmFsdWUiOiJhY2VpdGVzLXktdmluYWdyZXMifSx7ImtleSI6ImMiLCJ2YWx1ZSI6ImFjZWl0ZXMtZGUtb2xpdmEifV0sImZhY2V0c0JlaGF2aW9yIjoiU3RhdGljIiwiY2F0ZWdvcnlUcmVlQmVoYXZpb3IiOiJkZWZhdWx0Iiwid2l0aEZhY2V0cyI6ZmFsc2UsInZhcmlhbnQiOiI2NWE2OTc1MmRlODIzYzRlMzE5MTM4Y2ItdmFyaWFudFRyZWFtZW50In0%3D%22%7D")
              .asString();
      return response.getBody();
    } catch (Exception e) {
      System.out.println("e = " + e);
      return "error en la respuesta: " + e;
    }
  }
}

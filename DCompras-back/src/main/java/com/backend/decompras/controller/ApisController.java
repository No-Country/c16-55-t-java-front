package com.backend.decompras.controller;

import com.backend.decompras.service.ApisService;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class ApisController {
  private final ApisService apisService;
  @Value("${server.port}")
  private int puerto;
  @GetMapping("/")
  public String home() {
    return "La aplicación está ejecutándose en el puerto: " + puerto;
  }
  @RequestMapping(value = "/comodin", method = RequestMethod.GET, produces = "application/json")
  public Object comodin(){
    return apisService.getWinesFromCarrefour();
  }

  @GetMapping("/productsanypage")
  public String holamundo(){
    try {
      String token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDYxMzQyNDUsImV4cCI6MjU5MjkwNTQ0Mywic3ViIjoiY2xpY2tzdHJlYW0tYXIiLCJqdGkiOiI2YWRmNTRlMC0yYjFiLTQwYzgtYTlmOC03MjMyMjk0OGI4ODciLCJhdWQiOlsiYXIiXSwiaXNzIjoiZm9sZGVyel9hcGk6Y2xpIiwiX3R2IjoxLCJsb2MiOiIiLCJndWVzdCI6dHJ1ZSwicm9sZXMiOlsiUk9MRV9GTFpfR1VFU1QiXSwidXNlcl9hY3QiOmZhbHNlLCJ1c2VyX2lkIjpudWxsLCJ1c2VybmFtZSI6InNlcnZlcjowZjJjMTEzOC0wMDlhLTQ5YjAtYjdkOS1mNDdiZDcyM2QwYTU6YXIiLCJ1c2VyX2NudCI6WyJhciJdLCJlbnYiOiJwcm9kIn0.H2EM1E_0u5EqMfN0EsXr_iow3x4K1EKnBwb15aSo_GhHmnoLzHTL8yDSzE54ldFcA-kBomkA4EljAq0JPvNrRinF4nmWFhFqlB2wgzyBZpQMoJ2sngWkGpLbo-GGGj76H5E0jZsaBJKf0j1egJZ-GNqCyLacZSSh2hDuCyTpQGsSqzi3-9HowX5HuP67yNHCTtD8tI3_IZVh9fxYvrFqCo-5MlJH90IkHGsTr4-xg3glcZYbG0WJmHF2nT5SMLMjxCp_Lp3vbz_brxb5WRaajUijhoP-Ec-vueN4zyhEb4CqWTzKBcRqslmohdZVcQsmhel7RoqlXez9coF5IeaBMBOlMEj7jSmdX5e7NyS-UO0VsUJc8r1iWh17JqhrMV4yZpXeJAhUF4z1HsuGRKIBsaxpWz6cObHsjYDnOIbuFWIoMaMm8pPLUafW8TY-yPipA1NnWPlihSdGhpqIy97L9MT80kAyvN7zPEdj94Z-4klPOxnYmUocdSYmoXe6QbaGwrrqowbi6QszLdF60R95fp6kYsHNsc6p_OzBxnQTc8kl8S4jEVgG8cDXEgAKrWcsy7IHAu3OknPzrrEvFK6oGcgy_VrVV4WL4Al95w3hSul895ccmX0l_DLlVok1jvk7sKs0uAWLBqHX7HAM0lQt1Q8tzcYuJsL54_Md25BSJLI";
      String requestBody = """
                {
                    "page": "search",
                    "id": null,
                    "extra": {
                        "query": "jugo cepita",
                        "ip": "190.52.34.197",
                        "user_id": 15573394,
                        "session_id": "o7qh25nhnqfcucv5ssoi0gdsbs",
                        "location": {
                            "name": "San Salvador (Jujuy)",
                            "lat": "-24.18578530",
                            "lon": "-65.29948000",
                            "detected": false,
                            "ip": false
                        },
                        "country": "ar",
                        "platform": "website",
                        "identifier": "clickstream-d9b1686d-13fe-481a-98a3-b78825b9cb0b",
                        "source": "search"
                    }
                }
                """;
      HttpResponse<String> response = Unirest.post("https://clickstream-api.folderz.nl/clickstream/pageview/record?___urhs=pq&ts=1709091321&sg=5e072a78b3fbe1bd690824b1f94c14fa5963f4d5f2b0014b563701fe65a7f634")
              .header("Authorization", "Bearer " + token)
              .header("Content-Type", "application/json")
              .body(requestBody)
              .asString();

      System.out.println("response.getStatusText() = " + response.getStatusText());
      System.out.println("response.getBody() = " + response.getBody());
      return response.getBody();
    } catch (Exception e) {
      e.printStackTrace();
      return "hello error"+e;
    }
  }
}

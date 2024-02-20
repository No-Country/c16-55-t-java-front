package com.backend.decompras.security.jwt;

import com.backend.decompras.security.service.UserDetailsServiceCustomer;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtils {
  private String secret = "HRlELXqpSB";

  @Autowired
  private UserDetailsServiceCustomer userDetailsService;

  public String extractUsername(String token)
  {
    return extractClaims(token, Claims::getSubject);
  }

  public Date extractExpiration(String token)
  {
    return extractClaims(token, Claims::getExpiration);
  }

  public Boolean isTokenExpiration(String token)
  {
    return extractExpiration(token).before(new Date());
  }

  public String generateToken(String username, String role)
  {
    Map<String,Object> claims = new HashMap<>();
    claims.put("role", role);
    return createToken(claims,username);
  }

  String createToken(Map<String,Object> claims, String subject)
  {
    return Jwts.builder()
            .setClaims(claims)
            .setSubject(subject)
            .setIssuedAt(new Date(System.currentTimeMillis()))
            .setExpiration(new Date(System.currentTimeMillis()+100*60*60*10))
            .signWith(SignatureAlgorithm.HS384, secret).compact();
  }


  //en el payload los claims

  public Claims extractClaims(String token) {
    return Jwts
            .parser()
            .setSigningKey(secret)
            .parseClaimsJws(token)
            .getBody();
  }


  private <T> T extractClaims(String token, Function<Claims,T> claimsResolver)
  {
    final Claims claims = extractAllClaims(token);
    return claimsResolver.apply(claims);
  }



  private Claims extractAllClaims(String token){
    Claims claims = null;
    claims = Jwts.parser()
            .setSigningKey(secret)
            .parseClaimsJws(token)
            .getBody();
    return claims;
  }



  public Boolean validateToken(UserDetails userDetails, String token) {

    final String username = extractUsername(token);
    return (username.equals( userDetails.getUsername() ) && !isTokenExpiration(token));

  }

  public boolean isValidToken(String token) {
    final String username = extractUsername(token);

    UserDetails userDetails = userDetailsService.loadUserByUsername(username);

    return !ObjectUtils.isEmpty(userDetails);
  }
}

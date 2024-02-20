package com.backend.decompras.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id_user;
  private String name;
  private String lastname;
  private String email;
  private String password;
  private String country;
  private String city;
  private String province;
  private String role;
  private String address;
}

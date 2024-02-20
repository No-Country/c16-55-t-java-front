package com.backend.decompras.repository;

import com.backend.decompras.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  public Optional<User> findByEmail(String email);

  @Query(value = "SELECT * FROM users where email = :email", nativeQuery = true)
  public List<User> existUserRegistered(@Param("email")String email);
}

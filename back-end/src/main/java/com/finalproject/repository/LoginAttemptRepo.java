package com.finalproject.repository;

import com.finalproject.entity.LoginAttempt;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginAttemptRepo extends CrudRepository<LoginAttempt, Integer> {

    LoginAttempt findByUserName(String name);
}

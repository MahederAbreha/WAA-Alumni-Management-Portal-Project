package com.finalproject.service;

import com.finalproject.entity.User;
import com.finalproject.payload.request.PasswordChangeRequest;
import com.finalproject.payload.request.VerifyCodeRequest;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    List<User> findAll();

    User findById(Long id);

    void changePass(long id, PasswordChangeRequest pwrreq);

    void deActivate(long id);

    void activate(long id);

    void increaseFailedAttempts(User user);

    void resetFailedAttempts(String email);

    void lock(User user);

    boolean unlockWhenTimeExpired(User user);

    User getByEmail(String email);

    User getByUsername(String username);

    User findBYUserName(String name);

    ResponseEntity<?> verify(VerifyCodeRequest verifyCodeRequest, String code);
}

package com.techeazy.login.Controller;

import com.techeazy.login.Entity.LoginRequest;
import com.techeazy.login.Entity.SignupRequest;
import com.techeazy.login.Entity.User;
import com.techeazy.login.Response.ApiResponse;
import com.techeazy.login.Security.JwtUtil;
import com.techeazy.login.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse> signup(@RequestBody SignupRequest signupRequest) {
        User user = new User();
        user.setName(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(signupRequest.getPassword()); // Note: Password should be hashed in production

        User newUser = userService.signup(user);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ApiResponse("User registered successfully", newUser));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@RequestBody LoginRequest loginRequest) {
        System.out.println("Login request received for: " + loginRequest.getEmail());
        User user = userService.login(loginRequest.getEmail(), loginRequest.getPassword());
        if (user != null) {
            String token = jwtUtil.generateToken(user.getEmail());
            return ResponseEntity.ok(new ApiResponse("Login successful", token));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(new ApiResponse("Invalid email or password", null));
    }
}

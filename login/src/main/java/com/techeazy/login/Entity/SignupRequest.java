package com.techeazy.login.Entity;

import lombok.Data;


@Data
public class SignupRequest {
    private String name;
    private String email;
    private String password;

}

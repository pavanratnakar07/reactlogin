package com.techeazy.login.Service;
import com.techeazy.login.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.techeazy.login.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    public User signup(User user) {
        // Logic to save the user (e.g., password hashing) should be implemented here
        return userRepository.save(user);
    }

    public User login(String email, String password) {
        // Logic to validate the user credentials (use password encoder for checking password)
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            // Replace this with actual password validation
            if (user.getPassword().equals(password)) { // Use a password encoder in production
                return user;
            }
        }
        return null; // Return null if login fails
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(username);
        if (user.isPresent()) {
            return org.springframework.security.core.userdetails.User.builder()
                    .username(user.get().getEmail())
                    .password(user.get().getPassword())
                    .roles("USER") // Assign roles as needed
                    .build();
        } else {
            throw new UsernameNotFoundException("User not found with email: " + username);
        }
    }
}

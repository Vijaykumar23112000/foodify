package com.foodify.service.impl;

import com.foodify.entity.User;
import com.foodify.myimpl.TriFunction;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;
import java.util.function.Supplier;

import static io.jsonwebtoken.io.Decoders.BASE64URL;

@Service
public class JwtServiceImpl {

    @Value("${jwt.secret}")
    private String SECRET_KEY;

    private final Supplier<SecretKey> getSignInKey = () -> Keys.hmacShaKeyFor(BASE64URL.decode(SECRET_KEY));

    public final Function<User , String> generateToken = user ->
                Jwts
                    .builder()
                    .subject(user.getEmail())
                    .issuedAt(new Date())
                    .expiration(new Date(System.currentTimeMillis() + 86400000))
                    .signWith(getSignInKey.get())
                    .compact();

    private final Function<String , Claims> extractAllClaims = token ->
                Jwts
                    .parser()
                    .verifyWith(getSignInKey.get())
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();


    public Function<String , String> extractUsername = token -> extractClaim(token , Claims::getSubject);

    private <T> T extractClaim(String token , Function<Claims , T> resolver){
        Claims claims = extractAllClaims.apply(token);
        return resolver.apply(claims);
    }
    private final Function<String , Date> extractExpiration = token -> extractClaim(token , Claims::getExpiration);

    private final Function<String , Boolean> isTokenExpired = token -> extractExpiration.apply(token).before(new Date());

    public final TriFunction<String , UserDetails , Boolean> isValid = (token , user) -> extractUsername.apply(token).equals(user.getUsername()) && !isTokenExpired.apply(token);

}

# JSON Web Token (JWT)

## What is JWT?

**JWT (JSON Web Token)** is a compact token format used to transfer claims (information) between parties as a JSON object. In web applications, it is commonly used for authentication and authorization.

A typical login flow:

1. The user sends login credentials to the server.
2. The server verifies the credentials.
3. The server creates a JWT and sends it to the client.
4. The client sends the token with requests to protected resources.
5. The server validates the token before allowing access.

> A JWT is a signed token, not automatically an encrypted one. Do not put passwords, secrets, or sensitive personal information in its payload.

## What does a JWT contain?

A standard JWT has **three parts**, separated by dots (`.`):

`header.payload.signature`

Example shape (illustrative only):

`xxxxx.yyyyy.zzzzz`

### 1. Header

The header describes the token type and the signing algorithm.

Example decoded header:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- `alg`: algorithm used to create/verify the signature, such as `HS256`.
- `typ`: identifies the token type, usually `JWT`.

### 2. Payload

The payload contains **claims**—statements or data about the user, token, or intended recipient.

Example decoded payload:

```json
{
  "sub": "12345",
  "name": "Damini",
  "role": "student",
  "iat": 1791936000,
  "exp": 1791939600
}
```

- `sub`: subject, often the user identifier.
- `name`, `role`: example custom claims.
- `iat`: issued-at time, represented as a Unix timestamp.
- `exp`: expiration time, represented as a Unix timestamp.

Common registered claims include:
- `iss`: issuer — who created the token.
- `sub`: subject — who or what the token refers to.
- `aud`: audience — who the token is intended for.
- `exp`: expiration time.
- `nbf`: not-before time.
- `iat`: issued-at time.
- `jti`: token ID.

The payload is Base64URL-encoded, **not encrypted by default**. Anyone who gets the token can usually decode and read it.

### 3. Signature

The signature helps the server detect whether the header or payload has been changed and verify that the token was signed by a party with the appropriate key.

Conceptually, with HMAC SHA-256:

```text
HMACSHA256(
  base64url(header) + "." + base64url(payload),
  secret
)
```

The actual signature is encoded and forms the third part of the token.

- If the header or payload is modified, signature verification should fail.
- The signing secret/private key must be kept secure on the server.
- A valid signature does not, by itself, prove that every claim is appropriate; the server must also validate expiry, issuer, audience, and other relevant rules.

## JWT structure at a glance

| Part | Contains | Purpose |
|---|---|---|
| Header | Token type and signing algorithm | Describes how the token is signed |
| Payload | Claims / data | Carries information about the subject and token |
| Signature | Cryptographic signature | Helps verify integrity and authenticity |

## How JWT is used in an API

1. **Login:** `POST /login` with credentials over HTTPS.
2. **Token creation:** the server verifies the credentials and signs a JWT.
3. **Token storage:** the client stores it using an approach appropriate to the application and its threat model.
4. **Request:** the client sends the token, commonly in this header:

   ```http
   Authorization: Bearer <your-jwt>
   ```

5. **Validation:** middleware verifies the signature and checks expiry and relevant claims.
6. **Authorization:** the API checks the user's permissions before returning protected data.

## Important security notes

- Always use HTTPS.
- Never place passwords, API secrets, or other confidential data in a normal JWT payload.
- Verify the signature using a trusted library; do not trust a token just because it can be decoded.
- Validate `exp`, and where relevant `iss`, `aud`, and `nbf`.
- Use an explicit allowlist of accepted signing algorithms.
- Keep signing keys secret and rotate them appropriately.
- Treat bearer tokens like credentials: anyone who obtains one may be able to use it until it expires or is otherwise invalidated.
- Use short-lived access tokens and a carefully designed refresh/revocation strategy where needed.
- JWT is one token format; it is not itself a complete authentication system.

## Quick revision

- **JWT = JSON Web Token**
- **Three parts = Header + Payload + Signature**
- **Header:** algorithm and token type.
- **Payload:** claims.
- **Signature:** integrity/authenticity verification.
- **Typical API header:** `Authorization: Bearer <token>`
- **Remember:** Base64URL encoding is not encryption.

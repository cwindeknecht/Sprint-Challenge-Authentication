<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
⋅⋅1 Middleware: A piece of code that *generally* happens between the client request and the server response.  I say generally 
because I feel like I have seen some middleware that, while occurring between the request/response, it is not in direct response 
to the client request.
⋅⋅1 Sessions: A means of keeping track of information to ensure a user is authenticated.
⋅⋅1 brcypt: a hashing package that takes the password, adds a salt, and encrypts it.  
⋅⋅1 JWT: JSON Web Token; Similar to sessions, a means to keep track of an authenticated user.
1.  What does bcrypt do in order to prevent attacks?
⋅⋅1 You can set the number of rounds that prevents the quickness at which a password is generated.
1.  What are the three parts of the JSON Web Token?
⋅⋅1 The header(type and hashing algorithm), the payload(user information *vague I know, not 100% sure of the payload*), and the 
signature(a combination of the base64 header, payload, and secret).

Also, apparently I don't understand markdown syntax.  At least when I did a preview of this (something I learned from Ryan this week), 
it doesn't look how I expected...

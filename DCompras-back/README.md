
## USUARIO - AUTH

 - SIGNUP - POST
    - /auth/signup

| field |type                                                                |
| ----------------- | ------------------------------------------------------------------ |
|  email| String  |
|  password| String - Number |
|  country| String  |
|  address| String  |
|  province| String  |
|  name| String  |
|  lastname| String  |

 - LOGIN - POST
    - /auth/login
 
| field |type                                                                |
| ----------------- | ------------------------------------------------------------------ |
|  email| String  |
|  password| String - Number |
 
 - RESET INFO - POST
    - /user/update/info
    - TOKEN REQUIRED -> Authorization Bearer

 | field |type                                                                |
| ----------------- | ------------------------------------------------------------------ |
|  email| String  | 
|  country| String  |
|  address| String  |
|  province| String  |
|  name| String  |
|  lastname| String  |
 - RESET PASSWORD - POST
    - TOKEN REQUIRED -> Authorization Bearer
    - /user/update/password

 | field |type                                                                |
| ----------------- | ------------------------------------------------------------------ |
|  email| String  | 
|  password| String  |
|  newPassword| String  |

## APIS PRODUCTS

 - CARREFOUR - GET
    - /products/carrefour/vinos
    - /products/carrefour/arroz
    - /products/carrefour/fideos
    - /products/carrefour/aguas
    - /products/carrefour/aceites


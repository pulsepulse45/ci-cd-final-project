// Informational - 1xx
const HTTP_100_CONTINUE = 100
const HTTP_101_SWITCHING_PROTOCOLS = 101

// Successful - 2xx
const HTTP_200_OK = 200
const HTTP_201_CREATED = 201
const HTTP_202_ACCEPTED = 202
const HTTP_203_NON_AUTHORITATIVE_INFORMATION = 203
const HTTP_204_NO_CONTENT = 204
const HTTP_205_RESET_CONTENT = 205
const HTTP_206_PARTIAL_CONTENT = 206

// Redirection - 3xx
const HTTP_300_MULTIPLE_CHOICES = 300
const HTTP_301_MOVED_PERMANENTLY = 301
const HTTP_302_FOUND = 302
const HTTP_303_SEE_OTHER = 303
const HTTP_304_NOT_MODIFIED = 304
const HTTP_305_USE_PROXY = 305
const HTTP_306_RESERVED = 306
const HTTP_307_TEMPORARY_REDIRECT = 307

// Client Error - 4xx
const HTTP_400_BAD_REQUEST = 400
const HTTP_401_UNAUTHORIZED = 401
const HTTP_402_PAYMENT_REQUIRED = 402
const HTTP_403_FORBIDDEN = 403
const HTTP_404_NOT_FOUND = 404
const HTTP_405_METHOD_NOT_ALLOWED = 405
const HTTP_406_NOT_ACCEPTABLE = 406
const HTTP_407_PROXY_AUTHENTICATION_REQUIRED = 407
const HTTP_408_REQUEST_TIMEOUT = 408
const HTTP_409_CONFLICT = 409
const HTTP_410_GONE = 410
const HTTP_411_LENGTH_REQUIRED = 411
const HTTP_412_PRECONDITION_FAILED = 412
const HTTP_413_REQUEST_ENTITY_TOO_LARGE = 413
const HTTP_414_REQUEST_URI_TOO_LONG = 414
const HTTP_415_UNSUPPORTED_MEDIA_TYPE = 415
const HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE = 416
const HTTP_417_EXPECTATION_FAILED = 417
const HTTP_428_PRECONDITION_REQUIRED = 428
const HTTP_429_TOO_MANY_REQUESTS = 429
const HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE = 431

// Server Error - 5xx
const HTTP_500_INTERNAL_SERVER_ERROR = 500
const HTTP_501_NOT_IMPLEMENTED = 501
const HTTP_502_BAD_GATEWAY = 502
const HTTP_503_SERVICE_UNAVAILABLE = 503
const HTTP_504_GATEWAY_TIMEOUT = 504
const HTTP_505_HTTP_VERSION_NOT_SUPPORTED = 505
const HTTP_511_NETWORK_AUTHENTICATION_REQUIRED = 511

module.exports = {
  HTTP_100_CONTINUE,
  HTTP_101_SWITCHING_PROTOCOLS,
  HTTP_200_OK,
  HTTP_201_CREATED,
  HTTP_202_ACCEPTED,
  HTTP_203_NON_AUTHORITATIVE_INFORMATION,
  HTTP_204_NO_CONTENT,
  HTTP_205_RESET_CONTENT,
  HTTP_206_PARTIAL_CONTENT,
  HTTP_300_MULTIPLE_CHOICES,
  HTTP_301_MOVED_PERMANENTLY,
  HTTP_302_FOUND,
  HTTP_303_SEE_OTHER,
  HTTP_304_NOT_MODIFIED,
  HTTP_305_USE_PROXY,
  HTTP_306_RESERVED,
  HTTP_307_TEMPORARY_REDIRECT,
  HTTP_400_BAD_REQUEST,
  HTTP_401_UNAUTHORIZED,
  HTTP_402_PAYMENT_REQUIRED,
  HTTP_403_FORBIDDEN,
  HTTP_404_NOT_FOUND,
  HTTP_405_METHOD_NOT_ALLOWED,
  HTTP_406_NOT_ACCEPTABLE,
  HTTP_407_PROXY_AUTHENTICATION_REQUIRED,
  HTTP_408_REQUEST_TIMEOUT,
  HTTP_409_CONFLICT,
  HTTP_410_GONE,
  HTTP_411_LENGTH_REQUIRED,
  HTTP_412_PRECONDITION_FAILED,
  HTTP_413_REQUEST_ENTITY_TOO_LARGE,
  HTTP_414_REQUEST_URI_TOO_LONG,
  HTTP_415_UNSUPPORTED_MEDIA_TYPE,
  HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE,
  HTTP_417_EXPECTATION_FAILED,
  HTTP_428_PRECONDITION_REQUIRED,
  HTTP_429_TOO_MANY_REQUESTS,
  HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE,
  HTTP_500_INTERNAL_SERVER_ERROR,
  HTTP_501_NOT_IMPLEMENTED,
  HTTP_502_BAD_GATEWAY,
  HTTP_503_SERVICE_UNAVAILABLE,
  HTTP_504_GATEWAY_TIMEOUT,
  HTTP_505_HTTP_VERSION_NOT_SUPPORTED,
  HTTP_511_NETWORK_AUTHENTICATION_REQUIRED
}

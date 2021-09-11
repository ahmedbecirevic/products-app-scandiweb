<?php
class Config
{
    // const DATE_FORMAT = "Y-m-d H:i:s";
    // const JWT_SECRET = "dk*M6spn7qk6b$<5";
    // const JWT_TOKEN_TIME = 604800;

    // DB connection
    public static function DB_HOST ()
    {
        return Config::get_env("DB_HOST", "localhost");
    }
    public static function DB_USERNAME ()
    {
        return Config::get_env("DB_USERNAME", "cardiaries");
    }
    public static function DB_PASSWORD ()
    {
        return Config::get_env("DB_PASSWORD", "cardiaries");
    }
    public static function DB_SCHEME ()
    {
        return Config::get_env("DB_SCHEME", "products_scandiweb");
    }
    public static function DB_PORT ()
    {
        return Config::get_env("DB_PORT", "3306");
    }

    // environment servers setup
    public static function ENVIRONMENT_SERVER ()
    {
        return Config::get_env("ENVIRONMENT_SERVER", "localhost/products-app-scandiweb/");
    }
    public static function PROTOCOL () {
        return strtolower(substr($_SERVER["SERVER_PROTOCOL"],0,strpos( $_SERVER["SERVER_PROTOCOL"],'/'))).'://';
    }

    public static function SERVER_NAME () {
        return $_SERVER['SERVER_NAME'];
    }

    public static function get_env($name, $default)
    {
        return isset($_ENV[$name]) && trim($_ENV[$name]) != '' ? $_ENV[$name] : $default;
    }
}

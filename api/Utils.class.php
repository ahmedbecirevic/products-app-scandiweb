<?php

class Utils {
  public static function postRequest () {
    return (array)json_decode(file_get_contents('php://input'));
  }
}
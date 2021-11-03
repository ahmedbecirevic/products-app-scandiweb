<?php

class Request 
{

  // gets the current http/s method: GET, POST, PUT etc
  private function getMethod()
  {
    return strtolower($_SERVER['REQUEST_METHOD']);
  }

  // checks if request is GET
  private function isGet()
  {
    return $this->getMethod() === 'get';
  }

  // checks if request is POST
  private function isPost()
  {
    return $this->getMethod() === 'post';
  }

  // this function returns an associative array with query params
  public function getQuery() 
  {
    $data = [];
    if ($this->isGet()) {
      foreach ($_GET as $key => $value) {
          $data[$key] = filter_input(INPUT_GET, $key, FILTER_SANITIZE_SPECIAL_CHARS);
      }
    }
    if ($this->isPost()) {
      foreach ($_POST as $key => $value) {
        $data[$key] = filter_input(INPUT_POST, $key, FILTER_SANITIZE_SPECIAL_CHARS);
      }
    }
    return $data;
  }

  // get the data from body of post request
  public function getBody()
  {
    if ($this->isPost()) {
      return (array)json_decode(file_get_contents('php://input'));
    }
  }
}



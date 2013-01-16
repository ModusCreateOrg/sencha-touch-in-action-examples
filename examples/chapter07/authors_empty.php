<?php

//fake mobile connection
sleep(2);

$authors = array();

echo json_encode(array(
    'success'     => true,
    'totalNumber' => count($authors),
    'authors'     => $authors
));

?>
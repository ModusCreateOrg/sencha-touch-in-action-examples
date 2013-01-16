<?php

//fake mobile connection
sleep(2);

$authors = array(
    array( 'name' => 'Mitchell Simoens', 'twitter' => 'SenchaMitch' ),
    array( 'name' => 'Jay Garcia',       'twitter' => 'ModusJesus'  ),
    array( 'name' => 'Anthony De Moss',  'twitter' => 'ademoss1'    )
);

echo json_encode(array(
    'success'     => true,
    'totalNumber' => count($authors),
    'authors'     => $authors
));

?>
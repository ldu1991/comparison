<?php
$error = false;
$files = array();
$errors = array();

$uploaddir = './uploads/';

if (!is_dir($uploaddir)) {
    mkdir($uploaddir, 0777);
}

$fileContents = array();
foreach ($_FILES as $file) {
    $fileContents[] = file_get_contents($file['tmp_name']);
}

$pattern = '/<BAND:\d+>.*?<EOR>/s';
preg_match_all($pattern, $fileContents[0], $records1);
preg_match_all($pattern, $fileContents[1], $records2);


$new_file_content = '';
$new_file_content_arr = array();
$modernized_file_content = '';

$compareParams = explode(',', $_POST['query_text']);

foreach ($records1[0] as $record1) {
    foreach ($records2[0] as $record2) {
        $isMatch = true;

        foreach ($compareParams as $param) {
            $pattern = "/<$param:\d+>([^<]+)/";
            preg_match($pattern, $record1, $matches1);
            preg_match($pattern, $record2, $matches2);

            $value1 = isset($matches1[1]) ? $matches1[1] : '';
            $value2 = isset($matches2[1]) ? $matches2[1] : '';

            if ($value1 !== $value2) {
                $isMatch = false;
                break;
            }
        }

        if ($isMatch) {
            $new_file_content .= $record2 . "\n\n";
            $new_file_content_arr[] = $record2;
        }
    }
}

$nonMatchingElements = array_diff($records2[0], $new_file_content_arr);

foreach ($nonMatchingElements as $element) {
    $modernized_file_content .= $element . "\n\n";
}


$new_file = 'new_' . date("Y-m-d_H-i-s") . '.txt';
$mod_file = 'mod_' . date("Y-m-d_H-i-s") . '.txt';

$new_file_put = false;
$mod_file_put = false;

file_put_contents($uploaddir . $new_file, $new_file_content);
if (file_exists($uploaddir . $new_file)) {
    $new_file_put = true;
}

file_put_contents($uploaddir . $mod_file, $modernized_file_content);
if (file_exists($uploaddir . $mod_file)) {
    $mod_file_put = true;
}

if($new_file_put && $mod_file_put) {
    echo "Файлы успешно созданы и сохранены по пути: $uploaddir";
}


if (!empty($errors)) {
    foreach ($errors as $error) {
        echo $error . "<br>";
    }
}

<?php

/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */


function minimumNumber($n, $password)
    {
        $count = 0;
        $lower = 0;
        $upper = 0;
        $digit = 0;
        $special = 0;
        $special_characters = "!@#$%^&*()-+";
        for($i=0; $i<$n; $i++)
        {
            if($password[$i] >= 'a' && $password[$i] <= 'z')
            {
                $lower++;
            }
            else if($password[$i] >= 'A' && $password[$i] <= 'Z')
            {
                $upper++;
            }
            else if($password[$i] >= '0' && $password[$i] <= '9')
            {
                $digit++;
            }
            else if(strpos($special_characters, $password[$i]) !== false)
            {
                $special++;
            }
        }
        if($lower == 0)
        {
            $count++;
        }
        if($upper == 0)
        {
            $count++;
        }
        if($digit == 0)
        {
            $count++;
        }
        if($special == 0)
        {
            $count++;
        }
        if($n < 6)
        {
            if($count + $n < 6)
            {
                $count = 6 - $n;
            }
        }
        return $count;
    };
    echo minimumNumber(15, "<Petricor@5>");

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$n = intval(trim(fgets(STDIN)));

$password = rtrim(fgets(STDIN), "\r\n");

$answer = minimumNumber($n, $password);

fwrite($fptr, $answer . "\n");

fclose($fptr);
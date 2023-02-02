<?php

/** Making the string translatable */
_e( 'Sorry, no post available!!!', '_themename' );

/** Getting the number of comments */
$comments = 15;
printf ( _n( 'One Comment Only', '%s Comments', $comments, '_themename' ), $comments);

?>
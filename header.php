<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>
    <head>
        <script>
            // replace no-js with js in html element
            (function(h){
                h.className = h.className.replace(/\bno-js\b/i, 'js');
            })(document.documentElement);
        </script>

        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Instruct Internet Explorer to use its latest rendering engine -->
        <meta http-equiv="x-ua-compatible" content="ie=edge">

        <title><?php
        if( function_exists('get_field') && get_field('meta_title') ){
            the_field('meta_title');
        }else{
            wp_title('&laquo;', true, 'right');
            bloginfo('name');
        }
        ?></title>

        <meta name="description" content="<?php
        if( function_exists('get_field') && get_field('meta_description') ){
            the_field('meta_description');
        }else{
            bloginfo('description');
        }
        ?>">

        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>

<?php

function theme_setup()
{
  add_theme_support('title-tag');
}
add_action('after_setup_theme', 'theme_setup');

function assets_setup()
{
  $version = '201804101800';

  wp_enqueue_script('main-js', get_template_directory_uri() . '/dist/main.js', [], $version, true);
  wp_enqueue_style('main-style', get_template_directory_uri() . '/dist/main.css', array(), $version);
}
add_action('wp_enqueue_scripts', 'assets_setup');

function theme_remove_action_head()
{
  // Remove WordPress version information.
  remove_action('wp_head', 'wp_generator');
  remove_action('wp_head', 'wlwmanifest_link');

  // Remove EditURI address.
  remove_action('wp_head', 'rsd_link');

  // Remove REST API URL.
  remove_action('wp_head', 'rest_output_link_wp_head');

  // Remove emoji DNS prefetch.
  add_filter('emoji_svg_url', '__return_false');

  // Remove emoji script and style remove.
  remove_action('wp_head', 'print_emoji_detection_script', 7);
  remove_action('admin_print_scripts', 'print_emoji_detection_script');
  remove_action('wp_print_styles', 'print_emoji_styles');
  remove_action('admin_print_styles', 'print_emoji_styles');

  // Remove oEmbed.
  remove_action('wp_head', 'rest_output_link_wp_head');
  remove_action('wp_head', 'wp_oembed_add_discovery_links');
  remove_action('wp_head', 'wp_oembed_add_host_js');

  // Remove Built-in assets
  add_action('wp_enqueue_scripts', function () {
    wp_dequeue_style('wp-block-library');
  });
}
add_action('after_setup_theme', 'theme_remove_action_head');

// Page Slug Body Class
function add_slug_body_class($classes)
{
  global $post;

  if (isset($post)) {
    $classes[] = $post->post_type . '-' . $post->post_name;
  }

  return $classes;
}
add_filter('body_class', 'add_slug_body_class');

<?php
class TemplateWrapper
{
  public static $template;
  public $slug;
  public $templates;
  static $basename;

  public function __construct($template = '_base.php')
  {
    $this->slug = basename($template, '.php');
    $this->templates = array($template);

    if (self::$basename) {
      $str = substr($template, 0, -4);
      array_unshift($this->templates, sprintf($str . '-%s.php', self::$basename));
    }
  }

  static function get_template_path()
  {
    return self::$template;
  }

  static function init($template)
  {
    self::$template = $template;
    self::$basename = basename(self::$template, '.php');

    if (self::$basename === 'index') {
      self::$basename = false;
    }

    return self::get_locate_template();
  }

  public function get_locate_template()
  {
    $this->templates = apply_filters('wrap_' . $this->slug, $this->templates);
    return locate_template($this->templates);
  }
}

$TemplateWrapper = new TemplateWrapper();
add_filter('template_include', array($TemplateWrapper, 'init'), 99);

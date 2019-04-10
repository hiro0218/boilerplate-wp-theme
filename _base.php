<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php get_template_part('template/common/head'); ?>
</head>
<body <?php body_class(); ?>>
    <?php get_template_part('template/common/header'); ?>

    <main>
      <?php include TemplateWrapper::get_template_path(); ?>
    </main>

    <?php get_template_part('template/common/footer'); ?>

    <script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=default%2CIntersectionObserver"></script>
    <?php wp_footer(); ?>
</body>
</html>

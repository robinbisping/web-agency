<?php

// Require vendors via composer
require '../vendor/autoload.php';

// Register twig template engine
Twig_Autoloader::register();

// Load and set up twig environment
$loader = new Twig_Loader_Filesystem('../resources/views');
$twig = new Twig_Environment($loader, array(
	'debug' => true, // Disable in production
	'cache' => false // Enable in production: '../storage' instead of false
));

// Route all requests
$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) {
	$r->addRoute('GET', '/', view('index.html', array()));
});

// Render view
function view($file, $variables) {
	global $twig;
	$template = $twig->loadTemplate($file);
	echo $template->render($variables);
}
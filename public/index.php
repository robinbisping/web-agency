<?php

// Require vendors via composer
require __DIR__ . '../vendor/autoload.php';

// Register twig template engine
Twig_Autoloader::register();

// Load and set up twig environment
$loader = new Twig_Loader_Filesystem(__DIR__ . '../resources/views');
$twig = new Twig_Environment($loader, array(
	'debug' => true, // Disable in production
	'cache' => false // Enable in production: '../storage' instead of false
));

// Route all requests
$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) {
	$r->addRoute('GET', '/', view('index.html', array()));
}, [
	'cacheFile' => __DIR__ . '../storage/route.cache', // Adds cache support
	'cacheDisabled' => IS_DEBUG_ENABLED // Only in production
]);

// Render view
function view($file, $variables) {
	global $twig;
	$template = $twig->loadTemplate($file);
	echo $template->render($variables);
}
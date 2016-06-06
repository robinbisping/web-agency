<?php

// Require vendors via composer
require __DIR__ . '/../vendor/autoload.php';

// Register twig template engine
Twig_Autoloader::register();

// Load and set up twig environment
$loader = new Twig_Loader_Filesystem(__DIR__ . '/../resources/views');
$twig = new Twig_Environment($loader, array(
	'debug' => true, // Disable in production
	'cache' => false // Enable in production: '../storage' instead of false
));

// Add minifying html extension to twig (does only work when twig debugging is disabled)
$twig->addExtension(new \nochso\HtmlCompressTwig\Extension());

// Data
$data = array();
$data['base_url'] = 'http://localhost:3000/';
$data['current_url'] = $data['base_url'] . trim($_SERVER['REQUEST_URI'], '/');

// Add all routes
$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) {
	$r->addRoute('GET', '/', 'home');
	$r->addRoute('GET', '/webdesign', 'webdesign');
	$r->addRoute('GET', '/fotografie', 'fotografie');
	$r->addRoute('GET', '/drucksachen', 'drucksachen');
	$r->addRoute('GET', '/it', 'it');
	$r->addRoute('GET', '/offerte', 'offerte');
	$r->addRoute('GET', '/team', 'team');
}, [
	'cacheFile' => __DIR__ . '/../storage/route.cache', // Adds cache support
	'cacheDisabled' => true // Disable in production
]);

// Fetch method and URI
$httpMethod = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

// Strip query string and decode URI
if (false !== $pos = strpos($uri, '?')) {
	$uri = substr($uri, 0, $pos);
}
$uri = rawurldecode($uri);

$routeInfo = $dispatcher->dispatch($httpMethod, $uri);
switch ($routeInfo[0]) {
	case FastRoute\Dispatcher::NOT_FOUND:
		echo '404';
		break;
	case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
		$allowedMethods = $routeInfo[1];
		echo '405';
		break;
	case FastRoute\Dispatcher::FOUND:
		$file = $routeInfo[1] . '.html';
		$vars = $routeInfo[2];
		$template = $twig->loadTemplate($file);
		echo $template->render($data);
		break;
}
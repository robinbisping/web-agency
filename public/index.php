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

// Data
$data = array();
$data['base_url'] = 'http://localhost:3000/';
$data['current_url'] = $data['base_url'] . trim($_SERVER['REQUEST_URI'], '/');
$data['primary_menu'] = array(
	array(
		'title' => 'Home',
		'url' => $data['base_url']
	),
	array(
		'title' => 'Webdesign',
		'url' => $data['base_url'] . 'webdesign'
	),
	array(
		'title' => 'Fotografie',
		'url' => $data['base_url'] . 'fotografie'
	),
	array(
		'title' => 'IT-Lösungen',
		'url' => $data['base_url'] . 'it'
	),
);
$data['secondary_menu'] = array(
	array(
		'title' => 'Home',
		'url' => $data['base_url']
	),
	array(
		'title' => 'Webdesign',
		'url' => $data['base_url'] . 'webdesign'
	),
	array(
		'title' => 'Fotografie',
		'url' => $data['base_url'] . 'fotografie'
	),
);

// Route all requests
$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) {
	$r->addRoute('GET', '/', view('index.html'));
}, [
	'cacheFile' => __DIR__ . '/../storage/route.cache', // Adds cache support
	'cacheDisabled' => true // Disable in production
]);

// Render view
function view($file) {
	global $twig;
	global $data;
	$template = $twig->loadTemplate($file);
	echo $template->render($data);
}
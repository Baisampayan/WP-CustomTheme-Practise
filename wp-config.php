<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_WPCustom_db' );

/** Database username */
define( 'DB_USER', 'wp_WPCustom_user' );

/** Database password */
define( 'DB_PASSWORD', 'wp_WPCustom_pw' );

/** Database hostname */
define( 'DB_HOST', 'localhost:8889' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',		 'YFZ5>!]/MG8E_0MLv=: 61vcbbFo?-RyL&Ncpl9)08UbRl?yC@DUIBq:.g2Tu]Kw');
define('SECURE_AUTH_KEY',  'JqT3 MH`H)n]^[|-/P^e}`d[4QJ+Q-z`)+6,$PE%R`zhS<|2NS5A:>C{,{O[oap4');
define('LOGGED_IN_KEY',	'N GPzA2i~v3[G$RkpaO~n yWuc,;),7p^j.ko{<0]tz^h`;.m[N[]gO92lm9-]-3');
define('NONCE_KEY',		';>dylIX=R,RL11B>_d|].9<b74>W|L[/w8dUOT§mr=R$[0MY <w3j@YH§>HsLU_{');
define('AUTH_SALT',		'_8z^$P-MO&1M{CLUi/5_ng;OLL`N?E(xEYP+yLPYk2}&Z=,1c|o}A@qAo:O$ k@j');
define('SECURE_AUTH_SALT', 'FpQj:C%Tj8~JJ!nL0E71=V!h-Y9`{W~xA]~t$JEZcTAH NP1Pti ^pX<hr6Uwwr=');
define('LOGGED_IN_SALT',   'Y 8Uo`9g:y.>J7;%`RW&8Lr3ZiJL4-?kbCmUh$y1c>.dCB<WoNcCbK+P$wWF/0()');
define('NONCE_SALT',	   'DL@2Wf§,`nVPovul-(Nh_oorZkW:R?Cu§?0zZm§wOS-dY%ci$-1aW2@8`+-;baxP');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

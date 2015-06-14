# Styleguide options

### Head

    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <script src='https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.js'></script>
    <link rel='stylesheet' href='https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.css'>
    <link rel='stylesheet' href='oto.css' />
	<link href='http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>

	<style>
		body {
			font-family: 'Droid Sans', sans-serif;
			margin: 0 auto;
			width: 960px;
		}

		header {
			font-weight: 100;
		    margin: 100px 0 80px;
			text-align: center;
		}

		header h1 {
			font-size: 330%;
			margin-bottom: 5px;
		}

		header h2 {
			color: rgba(0, 0, 0, .4);
		}

		footer {
			color: rgba(0, 0, 0, .6);
			font-size: 90%;
			margin-bottom: 30px;
			text-align: center;
		}

		.sg-block {
			margin: 65px 0;
		}

		.sg p {
			font-size: 90%;
  			line-height: 1.7;
			margin-top: -10px !important
  		}

		.sg-expando {
			margin-top: 20px;
		}

		.ball {
			margin: 10px 0;
		}

	</style>
	<!-- Due to: https://github.com/styledown/styledown/issues/2 -->
	<script>document.title = 'oto - The UI components of the Cahoots forum'</script>

### Body

	<header>
		<h1>oto</h1>
		<h2>The UI components of the Cahoots forum</h2>
	</header>

    <div class='sg-container' sg-content></div>
	
	<footer>&copy; 2015, Cahoots <a href="https://github.com/getcahoots/oto">Repository</a></footer>
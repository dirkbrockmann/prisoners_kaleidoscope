[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg

# The Prisoner's Kaleidoscope

[![CC BY 4.0][cc-by-shield]][cc-by]

This explorable illustrates the dynamics of the Prisoner's Dilemma, a famous game theoretic model. In the prisoner's dilemma players can chose to cooperate of defect. Depending on the choice the received payoffs and adopt their strategy. This model is a spatial variant of the model, that exhibits spatio-temporal chaos and beautiful patterns

The explorable is part of the [**Complexity Exporables Collection**](https://www.complexity-explorables.org). For more information about the system and its behavior consult the explorable
> [**"The Prisoner's Kaleidoscope" - The spatial prisoner's dilemma**](https://www.complexity-explorables.org/explorables/prisoners-kaleidoscope/)

## Installation & Use

Out of the box you can use the explorable in a basic `index.html` file like this

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<script src="https://cdn.jsdelivr.net/npm/@explorables/prisoners_kaleidoscope"></script>
	</head>
	<body class="avenir pa3 pa5-ns tj">
	    <div id="explorable_container"></div>
	</body>
	<script type="text/javascript">
		prisoners_kaleidoscope.load("explorable_container")
	</script>
</html>
```
The header `<script>` tag loads the bundle, the `<div>` in the document is the container in which the explorable gets anchored when the function `prisoners_kaleidoscope.load()` gets executed at the bottom. The `load` function needs the `<div>` container `id` as an argument.

## Installing the whole package locally

Clone repository:

```shell
git clone https://github.com/dirkbrockmann/prisoners_kaleidoscope.git
```


Go to the directory, install, build and show using `npm`:

1. `cd prisoners_kaleidoscope`
2. `npm install`
3. `npm run build`
4. `npm run show`

--- 

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]


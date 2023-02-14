# Explorable Template

This is a template repository for the development of [Complexity Explorables](www.complexity-explorables.org). The template can be used to create a new repository with all the files. Most of the files have to be adapted to create a new model (explorable), but the overall structure and configuration can help accelerate the making of a new explorable.

The template can be built and run (see below) and illustrates the [Viczek-Model](https://en.wikipedia.org/wiki/Vicsek_model) as an example complexity explorable.

## Creating a new repository from this template

Click on  **Use this template** to create a new repository.

Alternatively, use `gh` (you need to install `gh` first):

```shell
gh repo create my-explorable -p dirkbrockmann/explorable_template --private
gh repo clone my-explorable
```
Enter directory, install dependencies, build and run:

```shell
cd my-explorable
npm install
npm run build
npm run show
```
## Files in `dist`:

The build command generates two files in the `dist` directory:
1. ìndex.html
2. index.js

`index.html` loads the `index.js` bundle and loads the explorable. This is what the key part of `index.html`look like.

```html
<html>
    <head>
        <script src="index.js"></script>
    </head>
    <body>
        <div id="my-explorable_container"></div>
    </body>
    <script>my-explorable.load("my-explorable_container");</script>
</html>
```


## Files in `src`:

In order to make a new explorable you need to adapt the files in the `src`-directory. Here's brief descriptions of what they do and how they are connected:

### `index.js`:

This is the main entry file. It needs little modification. Everything is set up in this file.

### `config.js`: 

Configuration of simulation and layout. This is where all parameters should go that determine the look and feel of widgets, positioning and simulation parameters like the iteration speed. It should not contain model specific parameters.

### `container_config.js`: 

Configuration of the container elements (`display` and `controls`) that hold the explorable. By default this file is read by the `load()` function of `index.js`.

### `setup_container.js`:

This is used by `index.js` to setup the container elements with the parameters provided in `container_config.js`. This files does not be adapted much to a specific explorable.

### `controls.js`:
Sets up all the widgets objects and html elements that are bound to them. This needs to be adapted to the explorable that is to be made. However, it is coded such that little adaptation is needed.

### `model.js`:

This contains all the stuff the model does without the visualization part. E.g. if your explorable is a dynamical system, this is where you define the rules that change the systems state. The quantities of the models that are required for visualization should be exported (and imported by `viz.js`).

### `parameters.js`:

These are the parameters of your model, containing fixed parameters, variables (usually linked to sliders), choices (usually linked to radiobox elements in the controls) and booleans (usually linked to toggles).

### `reset_parameters.js`:

This contains code to reset parameters to their default value. It's quite generic but needs to be adapted a bit to the needs of a given explorable. It is usually linked to a reset button in the control pane.

### `viz.js`:

This is the visualization part. It imports information provided by `model.js` and uses it for drawing stuff in the `display` pane.

### `setup_interactions.js`:

This is a code chunk that connects
1. the model
2. the controls
3. the visualization

which is why it depends on many other files. It needs to be adapted to the specific explorable.

### `simulation.js`:

This is a very stable file, it sets up the generic things that happen when buttons are pressed, like 
1. running the simulation
2. initializing the simulation
3. updating the system

This file usually needs no modifications.

### `utils.js`:

Helper functions.

### `styles.css`:

This are styles that are used for the explorable and get packaged into the library. 










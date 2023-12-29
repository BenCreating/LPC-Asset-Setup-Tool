# LPC Asset Setup Tool

A browser app for setting up [Liberated Pixel Cup](https://lpc.opengameart.org) spritesheets for use in the [LPC Spritesheet Generator](https://bencreating.github.io/LPC-Spritesheet-Generator/).

## Licensing and Attribution

The code is available under the [MIT license](LICENSE).

## Running locally

This should work with any recent version of Node, but has been tested on the version specified by the [.node-version file](/.node-version).

```
npm install
npm start
```

You should then be able to visit http://localhost:8080.

To run the server on a different port:

```
npm start -- --port 4000
```

If you add or modify a definition file you can recompile the merged definitions without restarting the server by running:

```
npm run merge-definitions
```

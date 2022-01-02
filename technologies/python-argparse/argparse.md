# Argparse: Parser for command-line options, arguments and sub-commands

You add arguments to the parser. Then you call `parse_args()` it will return a dict like object. It will contain information about the input for each of your arguments.

It will also generate a help file from the information you give it about each command.

## Flow

The argparse module revolves around the `ArgumnetParser object`.

```py
parser = argpares.ArgumnetParser(description='do a thing')
```

You can then add arguments to the parser. These argumnets will be used to parse and sys.argv list and will all be returnd with some values in the pared object.

```
parser.add_argumnet('list')
```
You would then call `.parse_args()` to parse the sys.argv list.
```

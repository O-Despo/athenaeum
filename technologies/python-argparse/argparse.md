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
parser.add_argumnet('-f', action='store_const', const='a')
```
You would then call `.parse_args()` to parse the sys.argv list.
```
it would retun somthing like this `Namespace(list=[343, 2], force='a')
```
## Argument Parser

prog - The name of the program (default: sys.argv[0])
usage - The string describing the program usage (default: generated from arguments added to parser)
description - Text to display before the argument help (default: none)
epilog - Text to display after the argument help (default: none)
parents - A list of ArgumentParser objects whose arguments should also be included
formatter_class - A class for customizing the help output
prefix_chars - The set of characters that prefix optional arguments (default: ‘-‘)
fromfile_prefix_chars - The set of characters that prefix files from which additional arguments should be read (default: None)
argument_default - The global default value for arguments (default: None)
conflict_handler - The strategy for resolving conflicting optionals (usually unnecessary)
add_help - Add a -h/--help option to the parser (default: True)
allow_abbrev - Allows long options to be abbreviated if the abbreviation is unambiguous. (default: True)
exit_on_error - Determines whether or not ArgumentParser exits with error info when an error occurs. (default: True)

you can use $(prog) to add the name of your program to a help message

a formatter class can be RawDecitionHelpFromatter, RawTextHelpFormatter, ArgumnetDefaultHelpFormatter, MetavarTypeHelpFormatter

Argument_default: makes it so you can make a global default value

passing: argparse.SUPRESS to argument_default results creating variables only if they are set to a non default value

Conflict handler is for if you are using a parent and need to make new arguments override old ones = 'revolve'

## `add_argumnet`



name or flags - Either a name or a list of option strings, e.g. foo or -f, --foo.

action - The basic type of action to be taken when this argument is encountered at the command line.

nargs - The number of command-line arguments that should be consumed.

const - A constant value required by some action and nargs selections.

default - The value produced if the argument is absent from the command line and if it is absent from the namespace object.

type - The type to which the command-line argument should be converted.

choices - A container of the allowable values for the argument.

required - Whether or not the command-line option may be omitted (optionals only).

help - A brief description of what the argument does.

metavar - A name for the argument in usage messages.

dest - The name of the attribute to be added to the object returned by parse_args().


### action

The values of `action` are

- `store`: default stores the args value
- `store_const`: makes the values constant used with flags
- `append`: stores a list, can be used to make it so a option can be called multiple times
- `append_const`: like append but stores constants, needs `const` args
- `count`: counts the number of times the keywords appears
- `help`: prints the help message
- `version`: expects `version=` prints message then exits
- `extend`: stores a list and extends each arg values to the list

### Nargs

- `N(int)`: N args to gather into list
- `?`: one argument > as expected: no value > const: no arg > default
- `*`: all args are gathered into a list that are unclaimed 
- `+`: same as `*` but throws a error if nothing is present

### Choices

- uses a list of possible options for values of a arg

### metavar

- the stand in used for values in help message

## Action classes

Action classes can be used to make new classes there are used in the 'action' arg for making a parser.

## Parse args

`.parse_args`: called to parse the sys.argv or given a list that list



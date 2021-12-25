import arg from 'arg';

export interface Arguments {
    input: string;
    output: string;
}


export function getArguments(): Arguments {
    const args = arg(
        {
            "--input": String,
            "--output": String
        },
        {
            argv: process.argv
        }
    )

    return {
        input: args["--input"] || "",
        output: args["--output"] || ""
    }
}

export function checkArgs(args: Arguments): string | Boolean {
    if(args.input.length === 0) {
        return "--input";
    } else if (args.output.length === 0) {
        return "--output";

    }
    return false;
}

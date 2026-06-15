export type ErrorQuote = {
    quote: string;
    description: string;
    tags: string[];
};

export const errorQuotes: Record<string, ErrorQuote> = {
    worksOnMyMachine: {
        quote: "It works on my machine.",
        description: "The container built fine locally, but this production route is completely rejecting your request.",
        tags: ['500', 'any']
    },
    dnsAlways: {
        quote: "It's not DNS. There's no way it's DNS. It was DNS.",
        description: "The network routing layer couldn't resolve this endpoint. Check your configuration.",
        tags: ['404']
    },
    haltingProblem: {
        quote: "Exited with status code 1.",
        description: "The server process terminated abruptly while evaluating this path. No stack trace provided.",
        tags: ['500']
    },
    gitForcePush: {
        quote: "git push --force --no-verify",
        description: "Someone bypassed the pipeline gates, and now this resource is nowhere to be found.",
        tags: ['404', '500']
    },
    permDenied: {
        quote: "sudo: permission denied (user is not in the sudoers file). This incident will be reported.",
        description: "Your session token lacks the required security context to execute actions on this scope.",
        tags: ['403']
    },
    rubberDuck: {
        quote: "Have you tried explaining the bug to a rubber duck?",
        description: "An unhandled exception occurred. Talking out loud to your desk toys might help diagnose it.",
        tags: ['500', 'any']
    },
    nullPointer: {
        quote: "java.lang.NullPointerException",
        description: "We tried reading a property of something that completely ceases to exist in this dimension.",
        tags: ['500']
    },
    offByOne: {
        quote: "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-one errors.",
        description: "The array index looked for a data point just past the boundary of reality.",
        tags: ['500', 'any']
    },
    missingSemicolon: {
        quote: "Parsing error: Unexpected token, expected \";\"",
        description: "A single microscopic syntax character missing somewhere broke the entire delivery engine.",
        tags: ['500']
    },
    noEstimate: {
        quote: "This will be a quick 5-minute task.",
        description: "Famous last words before the downstream architecture completely imploded.",
        tags: ['500', 'any']
    },
    depHell: {
        quote: "npm ERR! code ERESOLVE: Unable to resolve dependency tree",
        description: "The underlying microservices are trapped in a fragile structural standoff.",
        tags: ['500']
    },
    cobolLegacy: {
        quote: "Don't touch that line. It's structural load-bearing legacy code from 1984.",
        description: "You tried requesting an internal subroutine that nobody alive understands anymore.",
        tags: ['404', '403']
    },
    exitVim: {
        quote: "How do I exit vim?",
        description: "You've successfully routed into this loop, but we can't find the clean exit pathway out.",
        tags: ['500', 'any']
    },
    overflow: {
        quote: "Maximum call stack size exceeded.",
        description: "The internal server routing engine got caught in an infinite loop chasing its own tail.",
        tags: ['500']
    },
    cloudCosts: {
        quote: "The serverless function timed out.",
        description: "The infrastructure provider cut our computation runtime short before it could return data.",
        tags: ['500']
    },
    isFeature: {
        quote: "It's not a bug, it's an undocumented feature.",
        description: "The resource returned an empty payload, but let's just pretend that was entirely intentional.",
        tags: ['404', 'any']
    }
};
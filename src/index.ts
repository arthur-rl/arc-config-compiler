#!/usr/bin/env node

import path from 'path';
import glob from "glob";
import { checkArgs, getArguments } from './util/args';
import logger from './util/logger';
import Complier from './compiler';

const args = getArguments();

const missingArguments = checkArgs(args);

if(missingArguments) {
    logger.error(`The argument ${missingArguments} is required`)
} else {
    new Complier({
        ...args
    }).run();
}

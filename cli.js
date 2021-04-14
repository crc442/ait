#!/usr/bin/env node

import { fileParser, scriptParser } from './src/index.js';

const { code, tags } = fileParser(process.argv[2])
const { rest, props } = scriptParser(code)
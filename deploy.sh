#!/bin/sh

set -e
rm -rf dist
npm run build
scp -r dist/* kapsi:komu.kapsi.fi/k-minor

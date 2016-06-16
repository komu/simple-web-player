#!/bin/sh

npm run build && scp -r dist/* kapsi:komu.kapsi.fi/k-minor

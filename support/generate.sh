#!/bin/bash
set -euo pipefail

INPUTS="$(find ./proto -type f -name '*.proto')"
proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/proto/ --defaults $INPUTS -I=./proto/
prettier --write ./proto

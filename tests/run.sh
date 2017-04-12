#!/bin/bash
set -e
export DEBUG=superagent

node server.js &
pid=$!

function finish {
	kill $pid
}
trap finish EXIT

sleep 1
python testrunner/bin/trunner -s http://localhost:5000
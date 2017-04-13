/*
* mbed Cloud JavaScript SDK
* Copyright ARM Limited 2017
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var fs = require('fs');
var path = require('path');
var readline = require('readline');

var mbed = require('../../lib/');
var config = require('./config');

var outputFile = "header.h";
var certificateName = "test-certificate";

var certificates = new mbed.CertificatesApi(config);

function ensureDirectory(directory) {
    var dirName = path.dirname(directory);
    if (!fs.existsSync(dirName)) {
        ensureDirectory(dirName);
    }
    if (fs.existsSync(directory)) return;
    fs.mkdirSync(directory);
}

function checkCertificate(successFn) {
    certificates.listCertificates({
        filter: {
            type: "developer"
        }
    }, (error, certs) => {

        if (error) {
            console.log(error);
            return;
        }

        var certificate = certs.data.find(cert => {
            return cert.name === certificateName;
        });

        if (certificate) {
            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question("Developer certificate already exists, overwrite? [y/N] ", function(answer) {
                if (answer === "y") {
                    certificate.delete(error => {

                        if (error) {
                            console.log(error);
                            return;
                        }

                        successFn();
                    });
                }
                rl.close();
            });
            return;
        }
        successFn();
    });
}

checkCertificate(() => {
    certificates.addCertificate({
        name: certificateName
    }, (error, certificate) => {

        if (error) {
            console.log(error);
            return;
        }

        ensureDirectory(path.dirname(outputFile));
        fs.writeFileSync(outputFile, certificate.headerFile);
        console.log(`Header file written to ${outputFile}`);
    });
});

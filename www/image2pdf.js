/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/
var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

module.exports = (function () {

    return {

        ErrorCode_ImageFileNotFound: 1,
        ErrorCode_PDFWriting: 2,

        ErrorCodeMap: {
            1: 'Image file not found',
            2: 'PDF file write error'
        },

        /**
         *  Converts the image at the given file path to a PDF file.
         *
         * @param {String} source image file path; if relative then "<appBundle>/www" is prepended
         * @param {String} target PDF file path; if relative then "~/tmp" is prepended
         * @param {Function} success callback is called without parameters
         * @param {Function} onError callback is called with error code (Int)
         *
         *  Returns (through Callback): OK: -, ERROR: Error Code (Int)
         */
        convert: function (imageFilePath, pdfFilePath, success, error) {
            argscheck.checkArgs('ssFF', 'urlChecker.check', arguments);
            var execSuccess = onSuccess.bind(null, success);
            var execError = onError.bind(null, error);
            exec(execSuccess, execError, "Image2PDF", "convert", [imageFilePath, pdfFilePath]);
        }
    };

    function onSuccess(success, param) {
        if (typeof success === 'function') success(param);
        return param;
    }

    function onError(error, param) {
        if (typeof error === 'function') error(param);
        return param;
    }

})();
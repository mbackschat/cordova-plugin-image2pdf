<!--
# license: Licensed to the Apache Software Foundation (ASF) under one
#         or more contributor license agreements.  See the NOTICE file
#         distributed with this work for additional information
#         regarding copyright ownership.  The ASF licenses this file
#         to you under the Apache License, Version 2.0 (the
#         "License"); you may not use this file except in compliance
#         with the License.  You may obtain a copy of the License at
#
#           http://www.apache.org/licenses/LICENSE-2.0
#
#         Unless required by applicable law or agreed to in writing,
#         software distributed under the License is distributed on an
#         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#         KIND, either express or implied.  See the License for the
#         specific language governing permissions and limitations
#         under the License.
-->

# cordova-plugin-image2pdf

The plugin is exposed via the `cordova.plugins.image2pdf` object, which converts an image file into a PDF file.

## Installation

    cordova plugin add https://github.com/mbackschat/cordova-plugin-image2pdf.git

## API

### convert(source, target, onSuccess, onError)

Converts the image at the given file path to a PDF file.

- source image file path (String)
    - if relative then "`<mainBundle:resourcePath>/www`" is prepended
    - `~` gets expanded. Example. `"~/tmp/input.jpg"`
- target PDF file path (String)
    - if relative then "`~/tmp`" is prepended
    - `~` gets expanded. Example. `"~/tmp/output.pdf"`
- onSuccess callback is called without parameters
- onError callback is called with error code (Int)
    - error code == 1: Image file not found,
    - error code == 2: PDF file write error

### Quick Example

```javascript
// source: www/test.jpg
// target: ~/tmp/test.pdf
cordova.plugins.image2pdf.convert("test.jpg", "test.pdf",
    function () { console.log("Done") },
    function (code) { console.log("Error code " + code) })
```

## Supported Platforms

- iOS
    - Supported image file formats: .png, .tiff/.tif, .jpeg/.jpg, .gif, .bmp/.BMPf, .ico, .cur, .xbm  
See also [Apple documentation](https://developer.apple.com/library/ios/documentation/2DDrawing/Conceptual/DrawingPrintingiOS/LoadingImages/LoadingImages.html#//apple_ref/doc/uid/TP40010156-CH17-SW7).



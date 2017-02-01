"use strict";

/**
 * This file is part of Shuup.
 *
 * Copyright (c) 2012-2017, Shoop Commerce Ltd. All rights reserved.
 *
 * This source code is licensed under the OSL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function () {
    // https://gist.github.com/mathewbyrne/1280286
    var specialChars = {
        "ą": "a",
        "ć": "c",
        "ę": "e",
        "ń": "n",
        "ł": "l",
        "ó": "o",
        "ś": "s",
        "ź": "z",
        "ż": "z"
    };

    function slugify(text) {
        text = text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text

        // Replace special characters
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = specialChars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var c = _step.value;

                text = text.replace(c, specialChars[c]);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return text;
    }

    function autoSlugify() {
        var val = $(this).val();
        $(this).parent().next().find(".slugfield").val(slugify(val));
    }
    $(document).on("keyup", ".autoupdate-slug", autoSlugify);
})();
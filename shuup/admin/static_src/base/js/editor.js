/**
 * This file is part of Shuup.
 *
 * Copyright (c) 2012-2017, Shoop Commerce Ltd. All rights reserved.
 *
 * This source code is licensed under the OSL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
function activateEditor($editor, attrs={}) {
    return $editor.summernote($.extend(true, {
        height: 200,
        callbacks: {
            onBlur: function() {
                $editor.parent().find("textarea.hidden").val($(this).summernote('code'));
            }
        },
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'italic', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'hr']],
            ['view', ['fullscreen']],
            ['help', ['help']]
        ]
    }, attrs));
}

function activateEditors() {
    $(".summernote-editor").each(function(idx, object) {
        const $editor = $(object);
        if($editor.parent().find(".note-editor").length === 0){
            activateEditor($editor);
        }
    });
}

$(function(){
    activateEditors();
});

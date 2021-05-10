import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';

import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload'

import Heading from '@ckeditor/ckeditor5-heading/src/heading';
// import List from '@ckeditor/ckeditor5-list/src/list';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
// import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
// import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
// import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';

import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';

import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';

import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';

import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';



import Link from '@ckeditor/ckeditor5-link/src/link';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';


// class InsertImage extends Plugin {
//     init() {
//         const editor = this.editor;

//         editor.ui.componentFactory.add( 'insertImage', locale => {
//             const view = new ButtonView( locale );

//             view.set( {
//                 label: 'Insert image',
//                 icon: imageIcon,
//                 tooltip: true
//             } );

//             // Callback executed once the image is clicked.
//             // view.on( 'execute', () => {
//             //     const imageUrl = prompt( 'Image URL' );

//             //     editor.model.change( writer => {
//             //         const imageElement = writer.createElement( 'image', {
//             //             src: imageUrl
//             //         } );

//             //         // Insert the image in the current selection location.
//             //         editor.model.insertContent( imageElement, editor.model.document.selection );
//             //     } );
//             // } );

//             return view;
//         } );
//     }
// }


ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ 
            Essentials, 
            Paragraph,
            Heading, 
            ListStyle, 
            Bold, 
            Italic,
            Image,
            ImageToolbar,
            ImageCaption,
            ImageStyle, 
            ImageResize,
            ImageUploadPlugin,
            Base64UploadAdapter,
            // SimpleUploadAdapter,
            Alignment,
            Highlight,
            HorizontalLine,
            MediaEmbed,
            Clipboard,
            RemoveFormat,
            SpecialCharacters, 
            SpecialCharactersEssentials,
            Table, 
            TableToolbar,
            TableProperties, 
            TableCellProperties,
            Link, 
            AutoLink
         ],
        toolbar: {
            items: [
                'heading', '|',
                'bold', 'italic', 'link','specialCharacters','horizontalLine','insertTable','alignment','highlight', 'removeFormat','|',
                'bulletedList', 'numberedList', '|',
                'imageUpload','mediaEmbed','|',
                'undo', 'redo'
            ],
            shouldNotGroupWhenFull: true
        },
        link: {
            decorators: {
                defaultProtocol: 'https://',
                addTargetToExternalLinks: {
                    mode: 'automatic',
                    callback: url => /^(https?:)?\/\//.test( url ),
                    attributes: {
                        target: '_blank',
                        rel: 'noopener noreferrer'
                    }
                }
            }
        },
        highlight: {
            options: [
                {
                    model: 'redPen',
                    class: 'pen-red',
                    title: 'Red pen',
                    color: 'var(--ck-highlight-pen-red)',
                    type: 'pen'
                },
                // {
                //     model: 'greenMarker',
                //     class: 'marker-green',
                //     title: 'Green marker',
                //     color: 'var(--ck-highlight-marker-green)',
                //     type: 'marker'
                // },
                // {   model: 'yellowMarker', 
                //     class: 'marker-yellow', 
                //     title: 'Yellow Marker', 
                //     color: 'var(--ck-highlight-marker-yellow)', 
                //     type: 'marker' 
                // }

            ]
        },
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                { model: 'heading2', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }
            ]
        },
        // simpleUpload: {
        //     uploadUrl: ' /content/news',

        //     // Enable the XMLHttpRequest.withCredentials property.
        //     withCredentials: true,

        //     // Headers sent along with the XMLHttpRequest to the upload server.
        //     // headers: {
        //     //     'X-CSRF-TOKEN': 'CSRF-Token',
        //     //     Authorization: 'Bearer <JSON Web Token>'
        //     // }
        // },
        table: {
            contentToolbar: [
                'tableColumn', 
                'tableRow', 
                'mergeTableCells',
                'tableProperties', 
                'tableCellProperties' 
            ]
        },
        image: {
            toolbar: [
                'imageTextAlternative','|', 
                'imageStyle:alignLeft', 
                'imageStyle:full', 
                'imageStyle:alignRight'
            ],
            styles: [
                'full', 'alignLeft', 'alignRight'
            ]
        }
    } )
    .then( editor => {
        // console.log( 'Editor was initialized', editor );
        window.editor = editor;
    } )
    .catch( error => {
        console.error( error.stack );
    } );

document.querySelector( '#sendHTMLTag' ).addEventListener( 'click', () => {
    const editorData = editor.getData();
    document.body.insertAdjacentHTML('beforeend',`<textarea style="width:90%;height:500px;resize: vertical; display:block;margin:0 auto;" class="demoDOM"></textarea>`);
    const demoDome = document.querySelector(".demoDOM");
    demoDome.value = editorData;
} );



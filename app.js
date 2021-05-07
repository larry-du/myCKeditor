import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Image from '@ckeditor/ckeditor5-image/src/image';

import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import List from '@ckeditor/ckeditor5-list/src/list';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
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

import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';


class InsertImage extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'insertImage', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Insert image',
                icon: imageIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                const imageUrl = prompt( 'Image URL' );

                editor.model.change( writer => {
                    const imageElement = writer.createElement( 'image', {
                        src: imageUrl
                    } );

                    // Insert the image in the current selection location.
                    editor.model.insertContent( imageElement, editor.model.document.selection );
                } );
            } );

            return view;
        } );
    }
}


ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ 
            Essentials, 
            Paragraph,
            Heading, 
            List, 
            Bold, 
            Italic,
            Image,
            InsertImage,
            ImageCaption,
            // EasyImage,
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
            Base64UploadAdapter
         ],
        // toolbar: [ 'heading','numberedList', 'bulletedList','bold', 'italic','insertImage','alignment' ]
        toolbar: {
            items: [
                'heading', '|',
                'bold', 'italic', 'link', '|',
                'bulletedList', 'numberedList', '|',
                'undo', 'redo', '|',
                'alignment','|',
                'insertImage','|',
                'highlight',
                'horizontalLine',
                'mediaEmbed',
                'removeFormat',
                'specialCharacters',
                'insertTable', 
                'imageStyle:alignLeft', 
                'imageStyle:alignCenter', 
                'imageStyle:alignRight',
                'uploadImage'
            ],
            shouldNotGroupWhenFull: true
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
                {
                    model: 'greenMarker',
                    class: 'marker-green',
                    title: 'Green marker',
                    color: 'var(--ck-highlight-marker-green)',
                    type: 'marker'
                },
                {   model: 'yellowMarker', 
                    class: 'marker-yellow', 
                    title: 'Yellow Marker', 
                    color: 'var(--ck-highlight-marker-yellow)', 
                    type: 'marker' 
                }

            ]
        },
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h2', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h3', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn', 
                'tableRow', 
                'mergeTableCells',
                'tableProperties', 
                'tableCellProperties' 
            ]
        },
        image:{
            styles: [
                'alignLeft', 'alignCenter', 'alignRight'
            ]
        }
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
        window.editor = editor;
    } )
    .catch( error => {
        console.error( error.stack );
    } );

    
